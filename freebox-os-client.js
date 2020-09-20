'use strict';

/**
 * Define modules
 */
let request = require('request');

/**
 * Load the endpoint declarations
 */
let endpoints = [].concat(
    require('./endpoints/authentication'),
    require('./endpoints/connection'),
    require('./endpoints/config'),
    require('./endpoints/download'),
    require('./endpoints/filesystem'),
    require('./endpoints/lan'),
    require('./endpoints/storage'),
    require('./endpoints/system')
);

/**
 * The client
 */
// let client = {}; // need multiple instances


/**
 * Create the standard callback method of the API
 *
 *
 * @param  {Function} next        The function call with the response as parameter
 *
 * @return {Function}             The callback function
 */
function createCallback(next) {

    /**
     * Try to parse the body from JSON to Object
     *
     *
     * @param  {String} body The body to parse
     *
     * @return {Object}      The object parsed or the body
     */
    function parse(body) {
        try {
            body = JSON.parse(body);
        } catch (e) {}
        return body;
    }

    /**
     * If the next function is undefined, it defines the standard function
     */
    if (!next) {
        next = function(response) {
            console.log(JSON.stringify(response));
        };
    }


    /**
     * Return the callback function
     */
    return function(error, response, body) {
        if (!response) {
            response = {
                statusCode: 999
            };
            error = 'Freebox unreachable';
        }
        if (!error && response.statusCode === 200) {
            body = parse(body);
            next(body);
        } else {
            next({
                success: false,
                msg: error || 'Error code unavailable',
                error_code: response.statusCode
            });
        }
    };
}


/**
 *  Create a function for the endpoint parameter
 *
 *
 * @param  {Object}     endpoint    The description of the endpoint
 * @return {Function}               The action to do for this endpoint
 */
function createEndPoint(endpoint, client) {
    return function(routeParams, bodyParam, sessionToken, next) {

        /**
         * Define the options
         */
        let options;
        options = {
          url: client.baseUrl + endpoint.options.url,
          encode: 'utf-8',
          method: endpoint.options.method
        };

        if (bodyParam && bodyParam.formData){
            options.formData = bodyParam.formData;
            options.headers = {
              'X-Fbx-App-Auth': sessionToken,
              'Content-type':'multipart/form-data'
            };
        } else {
            options.json = bodyParam;
            options.headers = {
              'X-Fbx-App-Auth': sessionToken
            };
        }
        

        /**
         * Replace the route parameters
         */
        for (let i in routeParams) {
            options.url = options.url.replace(':' + i, routeParams[i]);
        }

        /**
         *  Call the API
         */
        request(options, createCallback(next));
    };
}


/**
 * Adds the endpoints to the client
 */
function buildClient(client) {
    for (let i in endpoints) {
        let endpoint = endpoints[i];
        client[endpoint.name] = createEndPoint(endpoint, client);
    }
}


/**
 *  The Freebox OS Client
 *
 *
 * @param   freebox     The freebox information
 *
 * @return              The client
 */
function createClient(freebox) {

    let client = {};

    client.baseUrl = (freebox.proto || 'http') + '://' + (freebox.url || 'mafreebox.freebox.fr') + ':' + (freebox.port || 80) +  '/api/v4';

    buildClient(client);

    return client;
}

module.exports = createClient;

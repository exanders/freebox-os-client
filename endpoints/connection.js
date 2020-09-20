module.exports = [{
    name: 'getConnectionStatus',
    options: {
        url: '/connection',
        method: 'GET'
    }
}, {
    name: 'getConnectionConfig',
    options: {
        url: '/connection/config',
        method: 'GET'
    }
}, {
    name: 'updateConnectionConfig',
    options: {
        url: '/connection/config',
        method: 'PUT'
    }
}, {
    name: 'getConnectionConfigIPv6',
    options: {
        url: '/connection/ipv6/config',
        method: 'GET'
    }
}, {
    name: 'updateConnectionConfigIPv6',
    options: {
        url: '/connection/ipv6/config',
        method: 'PUT'
    }
}, {
    name: 'getXdslInfo',
    options: {
        url: '/connection/xdsl',
        method: 'GET'
    }
}, {
    name: 'getFtthInfo',
    options: {
        url: '/connection/ftth',
        method: 'GET'
    }
}, {
    name: 'getDdnsStatus',
    options: {
        url: '/connection/ddns/:provider/status/',
        method: 'GET'
    }
}, {
    name: 'getDdnsInfo',
    options: {
        url: '/connection/ddns/dyndns',
        method: 'GET'
    }
}, {
    name: 'updateDdnsConfig',
    options: {
        url: '/connection/ddns/:provider',
        method: 'PUT'
    }
}];

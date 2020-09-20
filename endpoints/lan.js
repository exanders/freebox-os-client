module.exports = [{
    name: 'getLanInterfaces',
    options: {
        url: '/lan/browser/interfaces/',
        method: 'GET'
    }
}, {
    name: 'getLanHosts',
    options: {
        url: '/lan/browser/pub/',
        method: 'GET'
    }
}, {
    name: 'getLanHost',
    options: {
        url: '/lan/browser/pub/:hostid',
        method: 'GET'
    }
}, {
    name: 'getLanInterfaces',
    options: {
        url: '/lan/browser/interfaces/',
        method: 'GET'
    }
}];
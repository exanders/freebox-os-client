module.exports = [{
    name: 'getSystemInfo',
    options: {
        url: '/system',
        method: 'GET'
    }
}, {
    name: 'reboot',
    options: {
        url: '/system/reboot/',
        method: 'POST'
    }
}];

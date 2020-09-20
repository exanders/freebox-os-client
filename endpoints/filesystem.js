module.exports = [{
    name: 'getTasks',
    options: {
        url: '/fs/tasks',
        method: 'GET'
    }
}, {
    name: 'getTaskInfo',
    options: {
        url: '/fs/tasks/:id',
        method: 'GET'
    }
}, {
    name: 'deleteTask',
    options: {
        url: '/fs/tasks/:id',
        method: 'DELETE'
    }
}, {
    name: 'updateTask',
    options: {
        url: '/fs/tasks/:id',
        method: 'PUT'
    }
}, {
    name: 'getFilesList',
    options: {
        url: '/fs/ls/:path',
        method: 'GET'
    }
}, {
    name: 'getFileInfo',
    options: {
        url: '/fs/info/:path',
        method: 'GET'
    }
}, {
    name: 'moveFile',
    options: {
        url: '/fs/mv',
        method: 'POST'
    }
}, {
    name: 'copyFile',
    options: {
        url: '/fs/cp',
        method: 'POST'
    }
}, {
    name: 'rmFile',
    options: {
        url: '/fs/rm',
        method: 'POST'
    }
}, {
    name: 'catFile',
    options: {
        url: '/fs/cat',
        method: 'POST'
    }
}, {
    name: 'createArchive',
    options: {
        url: '/fs/archive',
        method: 'POST'
    }
}, {
    name: 'extractArchive',
    options: {
        url: '/fs/extract',
        method: 'POST'
    }
}, {
    name: 'repairFile',
    options: {
        url: '/fs/repair',
        method: 'POST'
    }
}, {
    name: 'hashFile',
    options: {
        url: '/fs/hash',
        method: 'POST'
    }
}, {
    name: 'getFileHash',
    options: {
        url: '/fs/tasks/:id/hash',
        method: 'GET'
    }
}, {
    name: 'mkdir',
    options: {
        url: '/fs/mkdir',
        method: 'POST'
    }
}, {
    name: 'renameFile',
    options: {
        url: '/fs/rename',
        method: 'POST'
    }
}, {
    name: 'downloadFile',
    options: {
        url: '/dl/:path',
        method: 'GET'
    }
}];

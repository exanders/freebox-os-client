module.exports = [{
    name: 'getDisks',
    options: {
        url: '/storage/disk',
        method: 'GET'
    }
}, {
    name: 'getDiskInfo',
    options: {
        url: '/storage/disk/:id',
        method: 'GET'
    }
}, {
    name: 'updateDiskState',
    options: {
        url: '/storage/disk/:id',
        method: 'PUT'
    }
}, {
    name: 'formatDisk',
    options: {
        url: '/storage/disk/:id/format',
        method: 'PUT'
    }
}, {
    name: 'getPartitions',
    options: {
        url: '/storage/partition',
        method: 'GET'
    }
}, {
    name: 'getPartitionInfo',
    options: {
        url: '/storage/partition/:id',
        method: 'GET'
    }
}, {
    name: 'updatePartitionState',
    options: {
        url: '/storage/partition/:id',
        method: 'PUT'
    }
}, {
    name: 'checkPartition',
    options: {
        url: '/storage/partition/:id/check',
        method: 'PUT'
    }
}, {
    name: 'getStorageConfig',
    options: {
        url: '/storage/config',
        method: 'GET'
    }
}, {
    name: 'updateStorageConfig',
    options: {
        url: '/storage/config',
        method: 'PUT'
    }
}];

const fs = require('fs');
const path = require('path');

const nodeModulesPath = path.join(__dirname, 'node_modules');
const cacheFolderPath = path.join(nodeModulesPath, '.cache');

fs.rm(cacheFolderPath, { recursive: true }, (err) => {
    if (err) {
        console.error('Error deleting cache folder:', err);
    } else {
        console.log('Cache folder deleted successfully.');
    }
});

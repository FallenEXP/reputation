const FileSystem = require('fs');
const Path = require('path');

function walkSync(dir) {
    return FileSystem.statSync(dir).isDirectory()
        ? Array.prototype.concat(...FileSystem.readdirSync(dir).map(f => walkSync(Path.join(dir, f))))
        : dir;
}
exports.walkSync = readDirR;

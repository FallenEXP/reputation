const fs = require('fs');
let walkSync = (dir, filelist = []) => fs.readdirSync(dir)
 .map(file => fs.statSync(path.join(dir, file)).isDirectory()
	  ? walkSync(path.join(dir, file), filelist)
	  : filelist.concat(path.join(dir, file))[0]);
module.exports = walkSync;

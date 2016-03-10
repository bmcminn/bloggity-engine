var path = require('path')
  ;

// INIT PATHS OBJECT
var PATHS = {};


// FILES
PATHS.DOT_BLOGGITY  = path.resolve(process.cwd(), '.bloggity');
PATHS.FILE_CACHE    = path.resolve(PATHS.DOT_BLOGGITY, 'files.json');


// FOLDERS
PATHS.CONTENT       = path.resolve(process.cwd(), 'content');


// EXPORT FOR COMMONJS
module.exports = PATHS;

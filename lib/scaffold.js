var argv        = require('yargs').argv
  , fs          = require('grunt').file
  , PATHS       = require('./data/paths.js')
  ;



// default to exporting to a directory named .deploy/
if (!fs.exists(PATHS.DEPLOY)) {
  fs.mkdir(PATHS.DEPLOY);
}

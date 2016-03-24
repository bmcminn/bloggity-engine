
debugger;

var _           = require('lodash')
  , path        = require('path')
  , fs          = require('grunt').file
  , fsNode      = require('fs')
  , url         = require('url')
  , fastmatter  = require('fastmatter')
  , JSON        = require('./helpers/json-extended.js')
  , REGEX       = require('./helpers/regex.js')

    // PATHS DEFS
  , PATHS       = require('./data/paths.js')
  , EXTS        = require('./data/extensions.js')


    // GLOBBING PATTERNS
  , GLOBS = {
      CONTENT: path.resolve(PATHS.CONTENT, '**', '*.{' + EXTS.MARKDOWN.join(',') + '}')
    }


    // FILE TESTING FILTERS
  , IS_FILE   = {filter: 'isFile'}
  , IS_FOLDER = {filter: 'isFolder'}
  ;



var contentFiles = fs.expand(IS_FILE, GLOBS.CONTENT);


console.log(contentFiles);


// ITERATE AGAINST FILES AND CACHE THEIR METADATA
contentFiles = _.map(contentFiles, function(file) {

      var fileData = {
            filepath: file
          , filename: path.basename(file).replace(REGEX.FILE_EXT, '')
          }
        ;

      // GET YAML FRONTMATTER
      var fm = fastmatter(fs.read(file));

      fileData = _.extend(fileData, fm.attributes);
      fileData.contentRaw = fm.body;
      fileData.slug = fileData.title
                        .toLowerCase()
                        .replace(REGEX.SLUGGIFY, '-')
                        // .replace(REGEX.SLUG_NORMALIZE, '-')
                        .replace(REGEX.TRIM, '')
                      ;

      // GET FILE STATS
      var stats = fsNode.statSync(file);

      fileData.atime      = stats.atime;
      fileData.ctime      = stats.ctime;
      fileData.mtime      = stats.mtime;

      fileData.nlink      = stats.nlink;
      fileData.mode       = stats.mode;
      fileData.birthtime  = stats.birthtime;
      fileData.size       = stats.size;
      fileData.ino        = stats.ino;
      fileData.rdev       = stats.rdev;
      fileData.gid        = stats.gid;
      fileData.uid        = stats.uid;
      fileData.nlink      = stats.nlink;


      // GET FILE OUTPUT DATA
      var temp = fileData.filepath
          .slice(PATHS.CONTENT.length)
          .replace(REGEX.SLUGGIFY, '-')
          .replace(REGEX.FILE_EXT, '')
          .replace(REGEX.STARTING_SLASH, '')
          .split('/')
          ;

      console.log(temp);

      var indexName = 'index.html';

      // IF: this is a deeply nested document, create a "pretty" permalink
      // EX: /path/to/filename/index.html
      if (temp.length > 1) {
        temp = url.resolve('/' + temp.join('/'), indexName);

      // ELSE: it's a top level page, and should be treated as such
      } else {

        // IF: it is the index page, set the root document permalink
        if (fileData.filename.match(/index/i)) {
          temp = '/' + indexName;

        // ELSE: create a pretty permalink for the file
        // EX: /about/index.html
        } else  {
          temp = url.resolve('/' + fileData.filename + '/', indexName);
        }
      }

      // export the updated URL and path data
      fileData.renderPath = temp;
      fileData.permalink = url.resolve(temp, '.');


      console.log(fileData.renderPath);
      console.log(fileData.permalink);
      console.log('-----------');

      return fileData;
    });





// WRITE A FILE CACHE OF ALL DOCUMENTS CURRENTLY IN THE SYSTEM
PATHS.FILE_CACHE = path.resolve(PATHS.DOT_BLOGGITY, 'files.json');

fs.write(PATHS.FILE_CACHE, JSON.serialize(contentFiles, null, 4));



var _           = require('lodash')
  , path        = require('path')
  , fs          = require('grunt').file
  , fastmatter  = require('fastmatter')
  , yaml        = require('js-yaml')
  , swig        = require('swig')

  , regex = {
      FILE_EXT: /\.[\w\d\.]+/gi
    }

  , App         = require('./app.js')
  ;



// get theme templates
App.templates = fs.expand(path.resolve(App.paths.theme, 'templates', '**', '*'))

console.log(App.templates);

App.templatesMap = {};

_.each(App.templates, function(template, index) {
  var filename = path.basename(template).replace(regex.FILE_EXT, '');
  App.templatesMap[filename] = fs.read(template);
});






// initialize swig
swig.setDefaults({
  // loader: swig.loaders.fs(path.resolve(App.paths.theme, 'templates'))
  loader: swig.loaders.memory()
});


// swig.setTag('make_url',
//   // parse
//   function(str, line, parser, types, stack, options, swig) {

//   }

//   // compile
// , function(compiler, args, content, parents, options, blockName) {
//     return compiler(content, parents, options, blockName);
//   }

//   // ends
// , false

//   // block level
// , false
// );



// swig.



console.log(JSON.stringify(App, null, 4));
console.log(process.env);

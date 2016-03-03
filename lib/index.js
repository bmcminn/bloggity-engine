var _           = require('lodash')
  , path        = require('path')
  , fs          = require('grunt').file
  , fastmatter  = require('fastmatter')
  , yaml        = require('js-yaml')
  , nunjucks    = require('nunjucks')

  , App         = require('./app.js')

  , regex       = require('./regex.js')
  ;




// get theme templates
App.templates = fs.expand(App.globs.templates)

App.templatesMap = {};



_.each(App.templates, function(template, index) {


  var filename = template
        .substr(App.paths.templates.length+1, template.length-1)
        .replace(regex.FILE_EXT, '')
      ;
  App.templatesMap[filename] = template;
});



// initialize template engine
nunjucks.configure(App.paths.templates, {
  autoescape: true
});



var template = nunjucks.render(App.templatesMap.main, App.config);


console.log(template);
console.log('---------------------------------------------')



console.log(JSON.stringify(App, null, 4));


// console.log(process.env);

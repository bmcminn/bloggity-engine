var _           = require('lodash')
  , path        = require('path')
  , fs          = require('grunt').file
  , fastmatter  = require('fastmatter')
  , yaml        = require('js-yaml')
  ;


var App = {

  /**
   * [files description]
   * @type {Object}
   */
  files: {
    config: path.resolve(process.cwd(), 'config.yaml')
  },


  /**
   * [globs description]
   * @type {Object}
   */
  globs: {
    content: path.resolve(process.cwd(), 'content', '*')
  },


  /**
   * [config description]
   * @type {[type]}
   */
  config: null,


  /**
   * [model description]
   * @type {[type]}
   */
  model: null,


  /**
   * [getConfig description]
   * @return {[type]} [description]
   */
  getConfig: function(filepath) {
    var configFile = null;

    if (filepath && !fs.exists(filepath)) {
      return new Error('the config path' + filepath + ' does not exist.');

    } else {
      filepath = this.files.config;

    }

    return this.config = yaml.load(fs.read(filepath));
  }


  /**
   * [formatPostSlug description]
   * @return {[type]} [description]
   */
, formatPostSlug: function() {
    // TODO: need syntax for building URL slug formats
    // EX: @date-@title
  }


}




console.log(fs.expand(App.globs.content));


console.log(App.getConfig());


console.log(App.getConfig('waffels'));



module.exports = App;



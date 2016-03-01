var _           = require('lodash')
  , path        = require('path')
  , fs          = require('grunt').file
  , fastmatter  = require('fastmatter')
  , yaml        = require('js-yaml')
  , argv        = require('yargs').argv
  ;


var App = {

  /**
   * [files description]
   * @type {Object}
   */
  files: {
    config: path.resolve(process.cwd(), 'config.yaml')
  }


  /**
   * [paths description]
   * @type {Object}
   */
, paths: {

  }


  /**
   * [globs description]
   * @type {Object}
   */
, globs: {
    content: path.resolve(process.cwd(), 'content', '*')
  }


  /**
   * [env description]
   * @type {Object}
   */
, env: {}


  /**
   * [config description]
   * @type {[type]}
   */
, config: {}


  /**
   * [model description]
   * @type {[type]}
   */
, model: {}


  /**
   * Initialize the application object
   * @return {[type]} [description]
   */
, __init: function() {

    // get the system config object
    this.getConfig();

    // set our process environment variables
    if (argv.prod) {
      this.env.prod = true;
    } else {
      this.env.prod = false;

    }

    process.env.PROD = this.env.prod;



    // setup paths we need
    _.assign(this.paths, {
      theme: path.resolve(process.cwd(), 'themes', this.config.theme)
    });


    // return the current instance configuration
    return this;

  }



  /**
   * [getConfig description]
   * @return {[type]} [description]
   */
, getConfig: function(filepath) {
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


module.exports = App.__init();

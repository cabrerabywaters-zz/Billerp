/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files, and the ! prefix for excluding files.)
 */

// Path to public folder
var tmpPath = '.tmp/public/';

// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  '/metronic/global/plugins/font-awesome/css/font-awesome.min.css',
  '/metronic/global/plugins/simple-line-icons/simple-line-icons.min.css',
  '/metronic/global/plugins/bootstrap/css/bootstrap.min.css',
  '/metronic/global/plugins/uniform/css/uniform.default.css',
  '/metronic/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
  '/metronic/global/plugins/select2/css/select2.min.css',
  '/metronic/global/plugins/select2/css/select2-bootstrap.min.css',
  '/metronic/global/css/components-md.min.css',
  '/metronic/global/css/plugins-md.min.css',
  '/metronic/pages/css/login-2.min.css',  
  'styles/**/*.css'
];

// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  // Load sails.io before everything else
  'js/dependencies/sails.io.js',

  // Vendor Dependencies
  '/bower_components/jquery/dist/jquery.js',
  '/bower_components/jquery-ui/jquery-ui.min.js',  
  '/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
  '/bower_components/bootstrap/dist/js/boostrap.min.js', 
  '/metronic/global/plugins/jquery.min.js',
  '/metronic/global/plugins/bootstrap/js/bootstrap.min.js',
  '/metronic/global/plugins/js.cookie.min.js',
  '/metronic/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js',
  '/metronic/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js',
  '/metronic/global/plugins/jquery.blockui.min.js',
  '/metronic/global/plugins/uniform/jquery.uniform.min.js',
  '/metronic/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
  '/metronic/global/plugins/jquery-validation/js/jquery.validate.min.js',
  '/metronic/global/plugins/jquery-validation/js/additional-methods.min.js',
  '/metronic/global/plugins/select2/js/select2.full.min.js',
  '/metronic/global/scripts/app.min.js',
  '/metronic/pages/scripts/login.min.js',
  
  'js/dependencies/**/*.js',
 
  
  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'js/**/*.js',
 

  // Use the "exclude" operator to ignore files
  // '!js/ignore/these/files/*.js'
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];



// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(transformPath);
module.exports.jsFilesToInject = jsFilesToInject.map(transformPath);
module.exports.templateFilesToInject = templateFilesToInject.map(transformPath);

// Transform paths relative to the "assets" folder to be relative to the public
// folder, preserving "exclude" operators.
function transformPath(path) {
  return (path.substring(0,1) == '!') ? ('!' + tmpPath + path.substring(1)) : (tmpPath + path);
}

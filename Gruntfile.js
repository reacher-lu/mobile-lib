module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    jquery: {
      dist: {
        versions: {
          "2.0.3": [ "ajax", "deprecated", "sizzle" ,"effects"]
        },
        options: {
          prefix: "jquery-",
          minify: true
        },
        output: "lib"
      }
    },
    concat: {
      jqueryBuild: {
        src: ['lib/jquery-2.0.3.js','lib/time.js'],
        dest: 'lib/jquery.builder.js'
      },
      jquery: {
        src: ['bower_components/jquery/dist/jquery.min.js','lib/time.js'],
        dest: 'bower_components/jquery/dist/jquery.min.js'
      },
      zepto: {
        src: ['bower_components/zepto/dist/zepto.min.js','lib/time.js'],
        dest: 'lib/zepto.min.js'
      },
      jquip: {
        src: [
          'bower_components/jquip/dist/jquip.min.js',
          'bower_components/jquip/dist/jquip.events.min.js',
          'bower_components/jquip/dist/jquip.docready.min.js',
          'bower_components/jquip/dist/jquip.css.min.js',
          'bower_components/jquip/dist/jquip.ajax.min.js',
          'lib/time.js'
        ],
        dest: 'lib/jquip.min.js'
      },
      sprint: {
        src: [
          'bower_components/sprint/sprint.min.js',
          'lib/time.js'
        ],
        dest: 'lib/sprint.min.js'
      }
    }
  });


  grunt.loadNpmTasks("grunt-jquery-builder");
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask("default", ["jquery","concat"]);
};
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
      }
    }
  });

  grunt.loadNpmTasks("grunt-jquery-builder");
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask("default", ["jquery","concat"]);
};
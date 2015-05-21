module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    jquery: {
      dist: {
        versions: {
          // Remove everything we don't need from 2.x versions
          "2.0.3": [ "ajax", "deprecated", "sizzle" ]
        },
        options: {
          prefix: "jquery-",
          minify: true
        },
        output: "lib"
      }
    }
  });

  grunt.loadNpmTasks("grunt-jquery-builder");

  grunt.registerTask("default", ["jquery"]);
};
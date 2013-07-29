/*global module*/
module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 9000,
          base: 'src'
        }
      }
    },

    watch: {
      all: {
        files: ['**/*.html','**/*.js','**/*.css'],
        options: {
          livereload: true
        }
      }
    },

    jshint: {
      files: ['src/js/*.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('run', ['connect','watch']);
  grunt.registerTask('test', ['jshint']); // Todo: add unit testing

};
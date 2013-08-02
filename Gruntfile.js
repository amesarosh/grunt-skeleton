/*global module*/
module.exports = function (grunt) {
  'use strict';

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
        files: ['**/*.html', '**/*.js', '**/*.css'],
        options: {
          livereload: true
        }
      }
    },

    jshint: {
      files: ['src/js/*.js'],
      options: {
        // Enforcing
        'bitwise'  : true,     // Prohibit bitwise operators (&, |, ^, etc.)
        'camelcase': true,     // Identifiers must be in camelCase
        'curly'    : true,     // Require {} for every new block or scope
        'eqeqeq'   : true,     // Require triple equals (===) for comparison
        'forin'    : true,     // Require filtering for..in loops with obj.hasOwnProperty()
        'immed'    : true,     // Require immediate invocations to be wrapped in parens
        'indent'   : 2,        // Number of spaces to use for indentation
        'latedef'  : 'nofunc', // Require variables/functions to be defined before being used
        'newcap'   : true,     // Require capitalization of all constructor functions
        'noarg'    : true,     // Prohibit use of `arguments.caller` and `arguments.callee`
        'noempty'  : true,     // Prohibit use of empty blocks
        'nonew'    : true,     // Prohibit use of constructors for side-effects (without assignment)
        'quotmark' : true,     // Ensure whatever qutation marks used are consistent
        'undef'    : true,     // Require all non-global variables to be declared (prevents global leaks)
        'unused'   : true,     // Require all defined variables be used
        'strict'   : false,    // Requires all functions run in ES5 Strict Mode
        'trailing' : true,     // Prohibit trailing whitespaces
        'maxdepth' : 5,        // Max depth of nested blocks (within functions)

        // Relaxing
        'sub'      : true,     // Tolerate using `[]` notation when it can still be expressed in dot notation

        // Environments
        'browser'  : true,     // Web Browser (window, document, etc)
        'devel'    : false,    // Development/debugging (alert, confirm, etc)

        // Legacy
        'white'    : true      // Check against strict whitespace and indentation rules
      }
    },

    bower: {
      install: {
        options: {
          targetDir: './src/lib',
          layout: 'byComponent',
          install: true,
          verbose: false,
          cleanTargetDir: false,
          cleanBowerDir: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bower-task');

  grunt.registerTask('prepare', ['bower:install']);
  grunt.registerTask('run', ['connect', 'watch']);
  grunt.registerTask('test', ['jshint']); // Todo: add unit testing

};
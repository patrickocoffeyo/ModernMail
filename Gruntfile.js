'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    recess: {
      options: {
        compile: false
      },
      files: {
        'assets/css/style.css': [
          'assets/css/app.less'
        ]
      }
    },
    zip: {
      'output/final.zip': [
        'email.html',
        'assets/css/style.css',
        'assets/img/',
      ]
    },
    watch: {
      less: {
        files: ['assets/css/app.less'],
        tasks: ['recess']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-zip');

  grunt.registerTask('default', ['recess', 'zip']);

};

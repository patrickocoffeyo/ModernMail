'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      default: {
        files: {
          'assets/css/style.css': [
            'assets/less/app.less'
          ],
        }
      }
    },
    inlinecss: {
      default: {
        files: {
          'email.inline.html': 'email.html'
        }
      }
    },
    zip: {
      default: {
        src: [
          'email.inline.html',
          'assets/img/*',
          'assets/css/style.css'
        ],
        dest: 'builds/final.zip'
      }
    },
    watch: {
      less: {
        files: ['assets/css/*.less', 'assets/css/bootstrap/*.less'],
        tasks: ['less']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-inline-css');
  grunt.loadNpmTasks('grunt-zip');

  grunt.registerTask('default', ['less', 'inlinecss', 'zip']);

};

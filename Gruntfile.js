'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    recess: {
      main: {
        options: {
          compile: true,
          compress: false,
        },
        files: {
          'assets/css/style.css': [
            'assets/css/bootstrap/bootstrap.less',
            'assets/css/bootstrap/responsive.less',
            'assets/css/icons.css',
            'assets/css/app.less'
          ]
        }
      }
    },
    inlinecss: {
      main: {
        files: {
          'email.html' : 'email.inline.html',
        }
      }
    },
    comress: {
      main: {
        options: {
          archive: 'final.zip',
          mode: 'gzip',
        },
        files: [
          {src: ['email.inline.html', dest: 'email.html', filter: 'isFile'},
          {src: ['assets/img/**'], dest: 'assets/img/'},
        ],
      }
    }
    watch: {
      less: {
        files: [
          'assets/css/app.less',
          'assets/css/bootstrap/bootstrap.less'
        ],
        tasks: ['recess']
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-inline-css');
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('default', [
    'recess',
    'inlinecss',
    'compress',
  ]);

  grunt.registerTask('final', [
    'recess',
    'inline',
    'compress',
  ]);
};

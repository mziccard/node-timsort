module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-banner');

  var LICENSE = '/****\n * ' +
    grunt.file.read('./LICENSE.md', {encoding: 'utf-8'}).replace(/\n/ig, '\n * ') +
    '\n ****/';

  grunt.initConfig({
    babel: {
      options: {
        ast: false,
        sourceMaps: false,
        nonStandard: false,
        compact: 'false',
        comments: false,
        modules: 'umd',
        moduleId: 'timsort',
        experimental: true
      },
      build: {
        options: {
          loose: 'all',
          optional: [
            'spec.undefinedToVoid',
            'minification.propertyLiterals',
            'es7.classProperties'
          ]
        },
        files: [
          {
            expand: true,
            cwd: './src/',
            src: './**/*.js',
            dest: './build/'
          }
        ]
      }
    },
    usebanner: {
      license: {
        options: {
          position: 'top',
          banner: LICENSE,
          linebreak: true
        },
        files: {
          src: ['./build/**/*.js']
        }
      }
    },
    clean: {
      build: {
        src: ['./build']
      }
    },
    uglify: {
      build: {
        files: {
          'build/timsort.min.js': 'build/timsort.js'
        }
      }
    }
  });

  grunt.registerTask('build', ['clean:build', 'babel:build', 'usebanner:license', 'uglify:build']);

  grunt.registerTask('default', ['build']);
};

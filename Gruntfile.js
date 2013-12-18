'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: {
        src: ['Gruntfile.js', 'src/**/*.js', 'test/specs/**/*.js']
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  // Tasks
  grunt.registerTask('test', ['karma:unit']);
  // Default task.
  grunt.registerTask('default', ['jshint', 'test']);

};
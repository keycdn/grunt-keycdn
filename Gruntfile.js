'use strict';

module.exports = function (grunt) {

  // Project configuration
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Example configuration (just for testing purposes)
    keycdn: {
          purgeZone: {
                options: {
                  apiKey: '{your_api_key}',
                  zoneId: '{zone_id}',
                  method: 'get'
                }
          },
          purgeURL: {
                options: {
                  apiKey: '{your_api_key}',
                  zoneId: '{zone_id}',
                  method: 'del'
                },
                files: [
                  { dest: 'demo-1.kxcdn.com/lorem.css' },
                  { dest: 'demo-1.kxcdn.com/lorem.jpg' }
                ],
          },
    },

  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['default', 'keycdn:purgeURL']);
  grunt.registerTask('default', ['jshint']);
};

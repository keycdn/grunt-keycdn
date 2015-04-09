'use strict';

module.exports = function (grunt) {

  grunt.registerMultiTask('keycdn', 'Interact with the KeyCDN API', function () {

    var done = this.async();
    var options = this.options();

    if (!options.apiKey) {
      grunt.fail.fatal('options.apiKey not defined');
      return done();
    }

    if (!options.zoneId) {
      grunt.fail.fatal('options.zoneId not defined');
      return done();
    }

    var KeyCDN = require('keycdn');
    var keycdn = new KeyCDN(options.apiKey);

    if (options.method === 'del') {
        if (!this.files) {
          grunt.fail.fatal('files not defined');
          return done();
        }

        var urls = [];

        grunt.log.writeln('Purging URLs...');

        this.files.forEach(function (f) {
          grunt.log.writeln('\t' + f.dest);
          urls.push(f.dest);
        });

        keycdn.del('zones/purgeurl/' + options.zoneId + '.json', { urls: urls }, function (err, res) {
            if (err) {
              grunt.log.error(err);
              return done();
            }

            console.log(res);
            done(true);
        });

    } else if (options.method === 'get') {

        grunt.log.writeln('Purging Zone Cache...');

        keycdn.get('zones/purge/' + options.zoneId + '.json', function (err, res) {
            if (err) {
              grunt.log.error(err);
              return done();
            }

            console.log(res);
            done(true);
        });

    }

  });

};

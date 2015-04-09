# grunt-keycdn

Grunt task to interact with the KeyCDN API.

## Usage

### Purge Zone Cache

~~~js
grunt.initConfig({
    keycdn: {
      purgeZone: {
        options: {
          apiKey: '{your_api_key}',
          zoneId: '{zone_id}',
          method: 'get'
        }
      },
    },
  });
~~~

### Purge Selected URLs

~~~js
grunt.initConfig({
    keycdn: {
      purgeURL: {
        options: {
          apiKey: '{your_api_key}',
          zoneId: '{zone_id}',
          method: 'del'
        },
        files: [
          { dest: 'demo-1.kxcdn.com/css/main.css' },
          { dest: 'demo-1.kxcdn.com/img/logo.png' }
        ],
      },
    },
  });
~~~

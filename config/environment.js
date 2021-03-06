/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'client1',
    podModulePrefix: 'client1/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
     ENV.APP.LOG_RESOLVER = true;
     ENV.APP.LOG_ACTIVE_GENERATION = true;
     ENV.APP.LOG_TRANSITIONS = true;
     ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
     ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    
    
    
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self'",
    'font-src': "'self' 'unsafe-eval' https://fonts.gstatic.com",
    'connect-src': "'self' 'unsafe-eval' http://beadando-rest-szerver-csepelbicikli.c9users.io",//http://<REST API URL>.c9users.io"
    'img-src': "'self'",
    'style-src': "'self' 'unsafe-eval' https://fonts.googleapis.com",
    'media-src': "'self'"
  };

  return ENV;
};

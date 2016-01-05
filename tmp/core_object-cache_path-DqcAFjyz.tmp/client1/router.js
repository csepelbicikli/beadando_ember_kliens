define('client1/router', ['exports', 'ember', 'client1/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('index', { path: '/' });
    this.route('about');

    this.route('errors', function () {
      // this.route('new');
    });

    this.route('new', { path: '/errors/new' });
  });

  exports['default'] = Router;

});
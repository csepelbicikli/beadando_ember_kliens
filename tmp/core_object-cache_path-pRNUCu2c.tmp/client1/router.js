define('client1/router', ['exports', 'ember', 'client1/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('index', { path: '/' });

    this.route('recipes', function () {
      this.route('list', function () {
        this.route('new');
      });
      this.route('new');
      this.route('view', { path: '/:recipe_id' });
      this.route('edit', { path: '/edit/:recipe_id' });
    });
    this.route('ingredients', function () {
      this.route('new', { path: '/new/:recipe_id' });
      this.route('edit', { path: '/edit/:ingredient_id' });
    });
    this.route('modal');
  });

  exports['default'] = Router;

});
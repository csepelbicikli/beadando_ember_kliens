import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('about');

  this.route('errors', function () {
    // this.route('new');
  });

  this.route('new', { path: '/errors/new' });
});

export default Router;
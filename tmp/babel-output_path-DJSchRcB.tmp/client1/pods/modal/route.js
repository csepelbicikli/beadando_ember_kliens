import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    logout: function logout() {
      alert('logout');
    }
  }
});
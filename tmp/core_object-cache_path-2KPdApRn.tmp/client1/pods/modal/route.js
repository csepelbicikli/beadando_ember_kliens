define('client1/pods/modal/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    actions: {
      logout: function logout() {
        alert('logout');
      }
    }
  });

});
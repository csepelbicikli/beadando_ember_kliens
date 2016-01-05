define('client1/pods/application/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    actions: {
      showModal: function showModal(name, model) {
        this.render('logout-modal', {
          into: 'application',
          outlet: 'modal',
          model: model
        });
      },
      removeModal: function removeModal() {
        this.disconnectOutlet({
          outlet: 'modal',
          parentView: 'application'
        });
      }
    }
  });

});
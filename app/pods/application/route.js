import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    showModal: function(name, model) {
      this.render('logout-modal', {
        into: 'application',
        outlet: 'modal',
        model: model
      });
    },
    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});

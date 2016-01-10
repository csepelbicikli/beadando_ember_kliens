import Ember from 'ember';

export default Ember.Route.extend({
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
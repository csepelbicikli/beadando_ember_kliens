import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newError: function newError(properties) {
            this.store.createRecord('error', Object.assign({
                status: 'new',
                date: Date.now().toString()
            }, properties));
            this.transitionToRoute('errors.list');
        }
    }
});
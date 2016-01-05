import Ember from 'ember';

export default Ember.Route.extend({
    model: function model(params) {
        return this.store.findRecord('error', params.error_id);
    }
});
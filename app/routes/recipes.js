import Ember from 'ember';

export default Ember.Route.extend({
    model() {
       this.store.findAll('recipe');
       return this.store.findAll('ingredient');
    }
});

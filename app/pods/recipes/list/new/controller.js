import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newRecipe(properties) {
            this.store.createRecord('recipe', Object.assign({
                //status: 'new',
                date: Date.now().toString(),
                //ings: [] ,
            }, properties)).save().then(()=>{
            this.transitionToRoute('recipes.list');});
        }
    }
});

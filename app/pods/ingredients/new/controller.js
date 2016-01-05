import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newIngredient(properties, params) {
            
            
            var recipe = this.get('model');
            console.log(recipe);
            var ing = this.store.createRecord('ingredient', Object.assign({
               r: recipe
            }, properties)).save().then(()=>{
                
                //recipe.get('ings').then((ings)=>{ings.pushObject(ing).save().then(()=>{
                    this.transitionToRoute('recipes.list');
                //});});
                
                
            });
        }
    }
});
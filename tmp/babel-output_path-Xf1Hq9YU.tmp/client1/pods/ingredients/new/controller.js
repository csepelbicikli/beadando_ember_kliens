import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newIngredient: function newIngredient(properties, params) {
            var _this = this;

            var recipe = this.get('model');
            console.log(recipe);
            var ing = this.store.createRecord('ingredient', Object.assign({
                r: recipe
            }, properties)).save().then(function () {

                //recipe.get('ings').then((ings)=>{ings.pushObject(ing).save().then(()=>{
                _this.transitionToRoute('recipes.list');
                //});});
            });
        }
    }
});
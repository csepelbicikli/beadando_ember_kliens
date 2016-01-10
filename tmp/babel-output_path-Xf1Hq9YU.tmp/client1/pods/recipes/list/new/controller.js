import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newRecipe: function newRecipe(properties) {
            var _this = this;

            this.store.createRecord('recipe', Object.assign({
                //status: 'new',
                date: Date.now().toString()
            }, //ings: [] ,
            properties)).save().then(function () {
                _this.transitionToRoute('recipes.list');
            });
        }
    }
});
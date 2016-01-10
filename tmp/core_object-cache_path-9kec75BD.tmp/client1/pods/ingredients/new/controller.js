define('client1/pods/ingredients/new/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
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

});
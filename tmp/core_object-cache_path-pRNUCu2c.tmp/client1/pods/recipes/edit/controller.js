define('client1/pods/recipes/edit/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            saveRecipe: function saveRecipe(properties) {
                var _this = this;

                var recipe = this.get('model');
                console.log(recipe);
                recipe.setProperties(properties);
                // recipe.set('name', properties.name);
                // recipe.set('description', properties.description);

                return recipe.save().then(function () {
                    _this.transitionToRoute('recipes.list');
                });
            }
        }
    });

});
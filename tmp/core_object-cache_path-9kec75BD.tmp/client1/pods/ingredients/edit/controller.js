define('client1/pods/ingredients/edit/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            saveIngredient: function saveIngredient(properties) {
                var _this = this;

                var ingredient = this.get('model');
                console.log(ingredient);
                ingredient.setProperties(properties);
                // ingerdient.set('name', properties.name);

                return ingredient.save().then(function () {
                    _this.transitionToRoute('ingredients.list');
                });
            }
        }
    });

});
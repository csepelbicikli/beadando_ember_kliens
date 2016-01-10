define('client1/pods/components/recipe-list/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        actions: {
            deleteRecipe: function deleteRecipe(recipe) {
                //console.log(recipe);
                recipe.deleteRecord();
                recipe.save();
            }
        }
    });

});
define('client1/pods/components/recipe-detail/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        actions: {
            deleteIngredient: function deleteIngredient(ingredient) {
                //console.log(ingredient);
                ingredient.deleteRecord();
                ingredient.save();
            }
        }
    });
    /* init: function() {
         this.set('alma', 'piros');
     }.on('didInsertElement')*/

});
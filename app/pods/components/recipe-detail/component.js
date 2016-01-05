import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        deleteIngredient(ingredient) {
            //console.log(ingredient);
            ingredient.deleteRecord();
            ingredient.save();
        }
    },
   /* init: function() {
        this.set('alma', 'piros');
    }.on('didInsertElement')*/
});

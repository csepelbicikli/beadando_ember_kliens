import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteRecipe(recipe) {
            //console.log(recipe);
            recipe.deleteRecord();
            recipe.save();
        }
    }
});

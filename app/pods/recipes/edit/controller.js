import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        saveRecipe(properties) {
            var recipe = this.get('model');
            console.log(recipe);
            recipe.setProperties(properties);
            // recipe.set('name', properties.name);
            // recipe.set('description', properties.description);
            
            return recipe.save().then(() => {
                this.transitionToRoute('recipes.list');
            });
        }
    }
});

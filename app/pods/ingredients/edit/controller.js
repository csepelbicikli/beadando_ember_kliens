import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        saveIngredient(properties) {
            var ingredient = this.get('model');
            console.log(ingredient);
            ingredient.setProperties(properties);
            // ingerdient.set('name', properties.name);
            
            return ingredient.save().then(() => {
                this.transitionToRoute('recipes.list');
            });
        }
    }
});

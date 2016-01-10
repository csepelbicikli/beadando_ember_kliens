import Ember from 'ember';

export default Ember.Controller.extend({
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
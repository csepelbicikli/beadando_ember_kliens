import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        saveError: function saveError(properties) {
            var _this = this;

            var error = this.get('model');
            console.log(error);
            error.setProperties(properties);
            // error.set('location', properties.location);
            // error.set('description', properties.description);

            return error.save().then(function () {
                _this.transitionToRoute('errors.list');
            });
        }
    }
});
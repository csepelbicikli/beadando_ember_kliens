define('client1/pods/errors/edit/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
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

});
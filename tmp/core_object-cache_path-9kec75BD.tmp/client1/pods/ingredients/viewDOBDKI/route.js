define('client1/pods/ingredients/viewDOBDKI/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model(params) {
            // console.log(params)
            return this.store.findRecord('ingredient', params.ingredient_id);
        }
    });

});
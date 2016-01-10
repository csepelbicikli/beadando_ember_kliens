define('client1/pods/ingredients/listDOBDKI/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model() {
            return this.store.findAll('ingredient');
        }
    });

});
define('client1/pods/errors/view/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model(params) {
            // console.log(params)
            return this.store.findRecord('error', params.error_id);
        }
    });

});
define('client1/pods/recipes/edit/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model(params) {
            return this.store.findRecord('recipe', params.recipe_id);
        }
    });

});
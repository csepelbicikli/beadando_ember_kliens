define('client1/pods/errors/list/new/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            newError: function newError(properties) {
                this.store.createRecord('error', Object.assign({
                    status: 'new',
                    date: Date.now().toString()
                }, properties));
                this.transitionToRoute('errors.list');
            }
        }
    });

});
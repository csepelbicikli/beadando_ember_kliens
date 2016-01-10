define('client1/pods/application/adapter', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].JSONAPIAdapter.extend({
        host: 'http://rest-test-csepelbicikli.c9users.io',
        namespace: ''
    });

});
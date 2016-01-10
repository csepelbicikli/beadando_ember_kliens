import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://beadando-rest-szerver-csepelbicikli.c9users.io',
    namespace: ''
});
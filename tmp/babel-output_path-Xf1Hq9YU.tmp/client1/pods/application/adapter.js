import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://rest-test-csepelbicikli.c9users.io',
    namespace: ''
});
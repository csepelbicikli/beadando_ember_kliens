define('client1/tests/unit/pods/application/adapter-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('adapter:application', 'ApplicationAdapter', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  }, function () {
    // Replace this with your real tests.
    ember_mocha.it('exists', function () {
      var adapter = this.subject();
      chai.expect(adapter).to.be.ok;
    });
  });

});
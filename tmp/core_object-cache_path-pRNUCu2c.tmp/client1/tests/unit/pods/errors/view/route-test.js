define('client1/tests/unit/pods/errors/view/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:errors/view', 'ErrorsViewRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
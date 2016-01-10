define('client1/tests/unit/pods/errors/new/controller-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('controller:errors/new', 'ErrorsNewController', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    // Replace this with your real tests.
    ember_mocha.it('exists', function () {
      var controller = this.subject();
      chai.expect(controller).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/probamodel/model-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModel('probamodel', 'Probamodel', {
    // Specify the other units that are required for this test.
    needs: []
  }, function () {
    // Replace this with your real tests.
    ember_mocha.it('exists', function () {
      var model = this.subject();
      // var store = this.store();
      chai.expect(model).to.be.ok;
    });
  });

});
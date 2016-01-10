define('client1/tests/pods/components/my-modal/component.jshint', function () {

  'use strict';

  describe('JSHint - pods/components/my-modal/component.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/components/my-modal/component.js should pass jshint.\npods/components/my-modal/component.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/components/my-modal/component.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors').to.be.ok; 
  })});

});
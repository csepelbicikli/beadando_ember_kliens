define('client1/tests/pods/modal/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/modal/route.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/modal/route.js should pass jshint.\npods/modal/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/modal/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors').to.be.ok; 
  })});

});
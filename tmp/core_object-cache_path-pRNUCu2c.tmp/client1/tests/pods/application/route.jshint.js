define('client1/tests/pods/application/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/application/route.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/application/route.js should pass jshint.\npods/application/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/application/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors').to.be.ok; 
  })});

});
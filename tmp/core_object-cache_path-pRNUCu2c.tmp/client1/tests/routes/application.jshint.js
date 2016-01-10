define('client1/tests/routes/application.jshint', function () {

  'use strict';

  describe('JSHint - routes/application.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'routes/application.js should pass jshint.\nroutes/application.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/application.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors').to.be.ok; 
  })});

});
define('client1/tests/routes/recipes.jshint', function () {

  'use strict';

  describe('JSHint - routes/recipes.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'routes/recipes.js should pass jshint.\nroutes/recipes.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/recipes.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\nroutes/recipes.js: line 4, col 5, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors').to.be.ok; 
  })});

});
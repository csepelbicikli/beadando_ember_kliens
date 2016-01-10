define('client1/tests/pods/recipes/list/new/controller.jshint', function () {

  'use strict';

  describe('JSHint - pods/recipes/list/new/controller.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/recipes/list/new/controller.js should pass jshint.\npods/recipes/list/new/controller.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/recipes/list/new/controller.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/recipes/list/new/controller.js: line 5, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/recipes/list/new/controller.js: line 10, col 42, \'arrow function syntax (=>)\' is only available in ES6 (use esnext option).\n\n4 errors').to.be.ok; 
  })});

});
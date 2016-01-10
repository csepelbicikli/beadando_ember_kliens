define('client1/tests/pods/recipes/edit/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/recipes/edit/route.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/recipes/edit/route.js should pass jshint.\npods/recipes/edit/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/recipes/edit/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/recipes/edit/route.js: line 4, col 5, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors').to.be.ok; 
  })});

});
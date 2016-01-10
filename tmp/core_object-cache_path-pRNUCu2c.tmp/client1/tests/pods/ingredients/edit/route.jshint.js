define('client1/tests/pods/ingredients/edit/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/ingredients/edit/route.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/ingredients/edit/route.js should pass jshint.\npods/ingredients/edit/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/ingredients/edit/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/ingredients/edit/route.js: line 4, col 5, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors').to.be.ok; 
  })});

});
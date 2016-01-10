describe('JSHint - pods/ingredients/edit/controller.js', function(){
it('should pass jshint', function() { 
  expect(false, 'pods/ingredients/edit/controller.js should pass jshint.\npods/ingredients/edit/controller.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/ingredients/edit/controller.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/ingredients/edit/controller.js: line 5, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/ingredients/edit/controller.js: line 11, col 44, \'arrow function syntax (=>)\' is only available in ES6 (use esnext option).\n\n4 errors').to.be.ok; 
})});

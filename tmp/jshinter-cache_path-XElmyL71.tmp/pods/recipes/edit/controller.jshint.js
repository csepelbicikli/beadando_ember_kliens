describe('JSHint - pods/recipes/edit/controller.js', function(){
it('should pass jshint', function() { 
  expect(false, 'pods/recipes/edit/controller.js should pass jshint.\npods/recipes/edit/controller.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/recipes/edit/controller.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/recipes/edit/controller.js: line 5, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/recipes/edit/controller.js: line 12, col 40, \'arrow function syntax (=>)\' is only available in ES6 (use esnext option).\n\n4 errors').to.be.ok; 
})});

describe('JSHint - pods/recipe/model.js', function(){
it('should pass jshint', function() { 
  expect(false, 'pods/recipe/model.js should pass jshint.\npods/recipe/model.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/recipe/model.js: line 3, col 1, \'const\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/recipe/model.js: line 13, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors').to.be.ok; 
})});

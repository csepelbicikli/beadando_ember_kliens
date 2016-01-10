describe('JSHint - pods/recipes/list/route.js', function(){
it('should pass jshint', function() { 
  expect(false, 'pods/recipes/list/route.js should pass jshint.\npods/recipes/list/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/recipes/list/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors').to.be.ok; 
})});

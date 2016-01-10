describe('JSHint - pods/components/recipe-list/component.js', function(){
it('should pass jshint', function() { 
  expect(false, 'pods/components/recipe-list/component.js should pass jshint.\npods/components/recipe-list/component.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/components/recipe-list/component.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/components/recipe-list/component.js: line 5, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors').to.be.ok; 
})});

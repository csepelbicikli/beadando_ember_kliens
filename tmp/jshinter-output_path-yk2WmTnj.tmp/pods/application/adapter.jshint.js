describe('JSHint - pods/application/adapter.js', function(){
it('should pass jshint', function() { 
  expect(false, 'pods/application/adapter.js should pass jshint.\npods/application/adapter.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/application/adapter.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors').to.be.ok; 
})});

describe('JSHint - pods/ingredient/model.js', function(){
it('should pass jshint', function() { 
  expect(false, 'pods/ingredient/model.js should pass jshint.\npods/ingredient/model.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/ingredient/model.js: line 3, col 1, \'const\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/ingredient/model.js: line 10, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors').to.be.ok; 
})});

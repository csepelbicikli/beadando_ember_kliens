define('client1/routes/recipes', ['exports', 'ember'], function (exports, Ember) {

   'use strict';

   exports['default'] = Ember['default'].Route.extend({
      model: function model() {
         this.store.findAll('recipe');
         return this.store.findAll('ingredient');
      }
   });

});
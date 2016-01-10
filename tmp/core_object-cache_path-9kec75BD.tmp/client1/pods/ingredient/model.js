define('client1/pods/ingredient/model', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var IngredientModel = DS['default'].Model.extend({
    name: DS['default'].attr('string'),
    r: DS['default'].belongsTo('recipe')
  });

  exports['default'] = IngredientModel;

});
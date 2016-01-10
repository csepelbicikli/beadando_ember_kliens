define('client1/pods/recipe/model', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var RecipeModel = DS['default'].Model.extend({
    name: DS['default'].attr('string'),
    description: DS['default'].attr('string'),
    date: DS['default'].attr('string'),
    //  status: DS.attr('string'),
    ings: DS['default'].hasMany('ingredient' /*, { async: true }*/)
  });

  exports['default'] = RecipeModel;

});
import DS from 'ember-data';

const RecipeModel = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  date: DS.attr('string'),
//  status: DS.attr('string'),
  ings: DS.hasMany('ingredient'/*, { async: true }*/),
});



export default RecipeModel;
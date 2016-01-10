import DS from 'ember-data';

var IngredientModel = DS.Model.extend({
  name: DS.attr('string'),
  r: DS.belongsTo('recipe')
});

export default IngredientModel;
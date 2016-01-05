import DS from 'ember-data';

const IngredientModel = DS.Model.extend({
  name: DS.attr('string'),
  r: DS.belongsTo('recipe'),
});



export default IngredientModel;
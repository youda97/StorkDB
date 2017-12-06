import DS from 'ember-data';

export default DS.Model.extend({
  CityName: DS.attr(),
  results: DS.attr('number')
});

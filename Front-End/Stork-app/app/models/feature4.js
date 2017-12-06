import DS from 'ember-data';

export default DS.Model.extend({
  ScientificName:DS.attr(),
  PhysicalTraits: DS.attr(),
  CityName: DS.attr(),
  NumberFound: DS.attr('number')

});

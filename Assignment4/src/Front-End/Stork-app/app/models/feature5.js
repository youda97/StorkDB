import DS from 'ember-data';

export default DS.Model.extend({
  Timestamp: DS.attr('date'),
  NumberFound: DS.attr('number'),
  CityName: DS.attr(),
  UserID: DS.attr(),
  ScientificName: DS.attr()
});

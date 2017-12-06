import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr(),
  bird: DS.attr()
});

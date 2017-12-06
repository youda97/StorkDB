import Component from '@ember/component';

export default Component.extend({
  DS: Ember.inject.service('store'),
  notify: Ember.inject.service(),
  usersModel: Ember.computed(function(){
    return this.get('DS').findAll('user');
  }),
  birdsModel: Ember.computed(function(){
    return this.get('DS').findAll('bird');
  }),
  citiesModel: Ember.computed(function(){
    return this.get('DS').findAll('location');
  }),
  selectedDate: null,
  quantity: 0,
  Feature5: null,

  didRender(){
    this._super(...arguments);
    Ember.$('.ui.showFeature5.modal').modal({
      closable: false,
      detachable: false,
      transition: 'horizontal flip',
      onDeny:  () => {
         this.get('notify').warning('Operation has been cancelled');
         Ember.$('.ui.showFeature5.modal').modal('hide');
         Ember.$('.ui.showFeature5.modal').remove();
         this.set('notDONE', false);

      },

      onApprove: () => {
        var newSighting = this.get('DS').createRecord('feature5', {
          CityName: this.get('location'),
          UserID: this.get('user'),
          ScientificName: this.get('bird'),
          NumberFound: this.get('quantity'),
          Timestamp: new Date(this.get('selectedDate'))
        });
        newSighting.save();
        Ember.$('.ui.showFeature5.modal').modal('hide');
        Ember.$('.ui.showFeature5.modal').remove();
        this.set('notDONE', false);
        this.get('notify').success('A new record has been saved');

      }
    })
      .modal('show');
  },
  actions: {
    foundDate (date){
      this.set('selectedDate', date);
    },
  }
});

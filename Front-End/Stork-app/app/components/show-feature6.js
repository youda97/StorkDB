import Component from '@ember/component';

export default Component.extend({
  DS: Ember.inject.service('store'),
  notify: Ember.inject.service(),
  birdsModel: Ember.computed(function(){
    return this.get('DS').findAll('bird');
  }),
  citiesModel: Ember.computed(function(){
    return this.get('DS').findAll('location');
  }),
  Feature6: null,

  didInsertElement(){
    this._super(...arguments);
    Ember.$('.ui.showFeature6.modal').modal({
      closable: false,
      detachable: false,
      transition: 'horizontal flip',
      onDeny:  () => {
        this.get('notify').warning('Operation has been cancelled');
        Ember.$('.ui.showFeature6.modal').modal('hide');
        Ember.$('.ui.showFeature6.modal').remove();
        this.set('notDONE', false);
      },
      onApprove: () => {
        this.get('DS').query('feature6', {
          location: this.get('location'),
          bird: this.get('bird')
        });
        Ember.$('.ui.showFeature6.modal').modal('hide');
        Ember.$('.ui.showFeature6.modal').remove();
        this.set('notDONE', false);
        this.get('notify').success('All records have been updated');
      }
    })
      .modal('show');
  },
});

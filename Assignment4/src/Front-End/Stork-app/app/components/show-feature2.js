import Component from '@ember/component';

export default Component.extend({
  DS: Ember.inject.service('store'),

  Feature2: Ember.computed('offset', function () {
      return this.get('DS').findAll('feature2')
  }),

  didRender() {
    this._super(...arguments);
    Ember.$('.ui.showFeature2.modal').modal({
      closable: false,
      detachable: false,
      transition: 'horizontal flip',
    })
      .modal('show');
  } ,

  actions: {
    exit:  function (){
      Ember.$('.ui.showFeature2.modal').modal('hide');
      Ember.$('.ui.showFeature2.modal').remove();
      this.set('notDONE', false);
    }
  }
});

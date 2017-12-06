import Component from '@ember/component';

export default Component.extend({
  DS: Ember.inject.service('store'),

  Feature3:Ember.computed(function(){
    return this.get('DS').findAll('feature3');
  }),

  didRender(){
    this._super(...arguments);
    Ember.$('.ui.showFeature3.modal').modal({
      closable: false,
      detachable: false,
      transition: 'horizontal flip',
    })
      .modal('show');
  },

  actions: {
    exit:  function (){
      Ember.$('.ui.showFeature3.modal').modal('hide');
      Ember.$('.ui.showFeature3.modal').remove();
      this.set('notDONE', false);
    }
  }

});


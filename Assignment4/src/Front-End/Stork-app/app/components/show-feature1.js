import Component from '@ember/component';

export default Component.extend({

  DS: Ember.inject.service('store'),
  limit: 5,
  offset: 0,
  notDONE: null,

    Feature1: Ember.computed('offset', function () {
      return  this.get('DS').query('feature1', {
        limit: this.get('limit'),
        offset: this.get('offset')
      });

  }),

  didRender() {
    this._super(...arguments);
    Ember.$('.ui.showFeature1.modal').modal({
      closable: false,
      detachable: false,
      transition: 'horizontal flip',
    })
      .modal('show');
  },

  actions: {
    loadNext:  function ()  {
      this.set('offset', this.get('offset') + this.get('limit'));
      Ember.$('.ui.showFeature1.modal').modal('hide');
      Ember.$('.ui.showFeature1.modal').modal('show');
    },
    loadPrevious:  function () {
      if ((this.get('offset')- this.get('limit')) >= 0) {
        this.set('offset', this.get('offset') - this.get('limit'));
        Ember.$('.ui.showFeature1.modal').modal('hide');
        Ember.$('.ui.showFeature1.modal').modal('show');
      }
    },
    exit:  function (){

      Ember.$('.ui.showFeature1.modal').modal('hide');
      Ember.$('.ui.showFeature1.modal').remove();
      this.set('notDONE', false);
    },


  }
});

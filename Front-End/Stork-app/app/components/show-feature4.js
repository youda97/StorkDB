import Component from '@ember/component';

export default Component.extend({
  DS: Ember.inject.service('store'),
  notify: Ember.inject.service(),

  usersModel: Ember.computed(function () {
    return this.get('DS').findAll('user');
  }),

  birdsModel: Ember.computed(function () {
    return this.get('DS').findAll('bird');
  }),

  Feature4: null,

  didInsertElement() {
    this._super(...arguments);
    Ember.$('.ui.showFeature4.modal').modal({
      closable: false,
      detachable: false,
      transition: 'horizontal flip',
    })
      .modal('show');
  },

  actions: {
    show: function () {
      this.get('DS').query('feature4', {
        user: this.get('user'),
        bird: this.get('bird')
      }).then((rec) => {
        this.set('Feature4', rec);
        if (rec.content.length == 0) {
          this.get('notify').alert('No records are found!');
        } else {
          if (rec.content.length == 1) {
            this.get('notify').alert('One record is found');
          }
          else {
            this.get('notify').alert(rec.content.length + ' records are found!');
          }
        }

        console.log(rec.content.length);
      });

    },

    exit: function () {
      Ember.$('.ui.showFeature4.modal').modal('hide');
      Ember.$('.ui.showFeature4.modal').remove();
      this.set('notDONE', false);
    }
  }

});

import Component from '@ember/component';

export default Component.extend({


  actions: {
    openModal: function () {
      Ember.$('.ui.showER.modal').modal({
        detachable: false,
        transition: 'horizontal flip',
        onDeny: () => {
          return true;
        }
      })
        .modal('show');
    }
  }
});

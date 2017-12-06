import Controller from '@ember/controller';

export default Controller.extend({
  isFeature1Showing: false,
  isFeature2Showing: false,
  isFeature3Showing: false,
  isFeature4Showing: false,
  isFeature5Showing: false,
  isFeature6Showing: false,

  actions: {
    showFeature1() {
      this.set('isFeature1Showing', true);
    },
    showFeature2() {
      this.set('isFeature2Showing', true);
    },
    showFeature3() {
      this.set('isFeature3Showing', true);
    },
    showFeature4() {
      this.set('isFeature4Showing', true);
    },
    showFeature5() {
      this.set('isFeature5Showing', true);
    },
    showFeature6() {
      this.set('isFeature6Showing', true);
    }
  }

});

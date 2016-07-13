import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToLink1() {
        console.log( 'go to Item 1 link' );
    },

    goToLink2() {
        console.log( 'go to Item 2 link' );
    },

    goToLink3() {
        console.log( 'go to Item 3 link' );
    }
  }
});

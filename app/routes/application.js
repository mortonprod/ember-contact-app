import Ember from 'ember';

/**
 * We set the default store at the top of the application.
 * In production we would move this to the backend and get ember to query automatically.
 */
export default Ember.Route.extend({
  model()
  {
    this.get("store").createRecord('contact', {
      id: "0",
      fullName: 'Alex store',
      phoneNumber: 10101,
      mobileNumber: 10101,
    });
  },
});

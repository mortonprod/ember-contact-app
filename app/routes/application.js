import Ember from 'ember';

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

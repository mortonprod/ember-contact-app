import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  init()
  {
    this._super(...arguments);
  },
  actions: {
    submit()
    {
      const input = {};
      
      input.fullName = this.get('fullName');
      input.phoneNumber = this.get('phoneNumber');
      input.mobileNumber = this.get('mobileNumber');
      
      const store = this.get('store');
      const contacts = store.peekAll('contact');
      const length = contacts.get("length");

      console.log("contacts: " + contacts.indexOf(0) + " length: " + length);
      if (length > 0) {
        store.findAll('contact').then(function(contacts)
        {
          const count = contacts.get('length');
      
          console.log(count);
          input.id = Number(contacts.objectAt(count-1).id) +1;
          saveInput(store,input);
        });
      } else {
        input.id = 0;
        saveInput(store,input);
      }
    },
  },
});
/**
 * This function will save the result input to the store.
 * @param {Object} store This is the ember store 
 * @param {Object} input This is the object to store.
 * @return {null} null 
 */
function saveInput(store,input)
{
  store.createRecord('contact', {
    id: input.id,
    fullName: input.fullName,
    phoneNumber: input.phoneNumber,
    mobileNumber: input.mobileNumber,
  });
}


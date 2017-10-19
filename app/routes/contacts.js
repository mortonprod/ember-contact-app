import Ember from 'ember';

/**
 * The contacts route will take the contact part of the store. 
 * This allows us to use store for other parts of the app in the future.
 * Note findAll will query the contacts API on the server.
 * Since we have not setup a server it will return an error in google dev tools.
 */
export default Ember.Route.extend({
  
  model()
  {
    return this.get('store').peekAll('contact');
  },
  actions: {

    /**
     * We add a new contact by giving it a unique id and saving this as a record to the store. 
     * The unique id will just be one more than the highest current id.
     */
    submit(input)
    {    
      const store = this.get('store');
      const contacts = store.peekAll('contact');
      const length = contacts.get("length");

      //If there is no contacts then we need to start at 0. Otherwise take the next highest number.
      if (length > 0) {
        input.id = Number(contacts.objectAt(length - 1).id) + 1;
        saveInput(store,input);
      } else {
        input.id = 0;
        saveInput(store,input);
      }
    },

    removeContact(id)
    {
      console.log("id remove: " + id);
      this.get('store').peekRecord('contact', id).unloadRecord();
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

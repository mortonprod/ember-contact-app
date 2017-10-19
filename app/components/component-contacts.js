import Ember from 'ember';
/**
 * This component deals with placing the contacts down and adding new ones.
 */
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
      this.sendAction("submit",input);
    },

    /**
     * This is the only action we can take. 
     * It uses the id passes to this component to remove this from the store.
     * Note we only unload so we don't send a delete request over the network.
     * This is done since we don't have a backend.
     */
    removeContact(id)
    {
      console.log("Send removeContact action from contacts");
      this.sendAction("removeContact",id);
    },


  },
});


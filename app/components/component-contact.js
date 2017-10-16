import Ember from 'ember';

/**
 * This is a single contact row. It is placed in a contacts table.
 * Note: We add tagName:'' so we do not wrap the table elements in a div. 
 * Otherwise we would not render correctly in the table.
 * 
 * The store is connected to the app directly through service injection. 
 * So the displayed values are got from component-contacts, 
 * but the update of those values is through direct access of the store.
 */
export default Ember.Component.extend({
  tagName: '',
  store: Ember.inject.service(),
  init()
  {
    this._super(...arguments);
  },
  actions: {
    /**
     * This is the only action we can take. 
     * It uses the id passes to this component to remove this from the store.
     * Note we only unload so we don't send a delete request over the network.
     * This is done since we don't have a backend.
     */
    click()
    {
      const store = this.get('store');

      store.findRecord('contact', this.get("id"), {backgroundReload: false}).then(
        function(contact)
        {
          contact.unloadRecord();
        }
      );
    },
  },
});

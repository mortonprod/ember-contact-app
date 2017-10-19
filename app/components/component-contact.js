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

  init()
  {
    this._super(...arguments);
  },

  actions: {
    
    click()
    {
      console.log("id: " + this.get("id"));
      this.sendAction("removeContact",this.get("id"));
    },
  },
});

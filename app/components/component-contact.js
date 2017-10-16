import Ember from 'ember';

/**
 * Messages will be placed in template.
 * Note: We add tagName:'' so we do not wrap the table elements in a div. 
 * Otherwise we would not render correctly in the table.
 */
export default Ember.Component.extend({
  tagName: '',
  store: Ember.inject.service(),
  init()
  {
    this._super(...arguments);
  },
  actions: {
    click()
    {
      const store = this.get('store');

      store.findRecord('contact', this.get("id"), {backgroundReload: false}).then(
        function(contact)
        {
          //contact.deleteRecord();
          //contact.destroyRecord();
          contact.unloadRecord();
          //contact.save(); // => DELETE to /posts/1
        }
      );
    },
  },
});

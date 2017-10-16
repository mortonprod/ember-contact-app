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
    return this.get('store').findAll('contact');
  },
});

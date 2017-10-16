import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({location: config.locationType});

/**
 * This will serve the contact route through the index route.
 */
Router.map(function()
{
  this.route('contacts',{path: '/'});
});

export default Router;

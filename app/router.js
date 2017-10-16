import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({location: config.locationType});

/**
 * This will serve the contact route. 
 * This will be below the application template.
 */
Router.map(function()
{
  this.route('contacts',{path: '/'});
});

export default Router;

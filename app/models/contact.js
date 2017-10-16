import DS from 'ember-data';

/**
 * This is contact model which will be used by the store.
 * Note it is missing an id entry which is automatically added by ember. 
 */
export default DS.Model.extend({
  fullName: DS.attr("string"),
  phoneNumber: DS.attr("number"),
  mobileNumber: DS.attr("number"),
});

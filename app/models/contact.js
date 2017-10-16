import DS from 'ember-data';

export default DS.Model.extend({
  fullName: DS.attr("string"),
  phoneNumber: DS.attr("number"),
  mobileNumber: DS.attr("number"),
});

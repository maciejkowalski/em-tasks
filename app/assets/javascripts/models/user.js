// for more details see: http://emberjs.com/guides/models/defining-models/

EmTasks.User = DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr("string"),
  passwordConfirmation: DS.attr("string"),
  avatar: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  comments: DS.hasMany("Comment")
});


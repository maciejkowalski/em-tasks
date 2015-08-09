// for more details see: http://emberjs.com/guides/models/defining-models/

EmTasks.User = DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr("string"),
  password_confirmation: DS.attr("string"),
  avatar: DS.attr('string'),
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  comments: DS.hasMany("Comment")
});


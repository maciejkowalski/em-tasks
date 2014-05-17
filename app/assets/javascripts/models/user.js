// for more details see: http://emberjs.com/guides/models/defining-models/

EmTasks.User = DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr("string"),
  password_confirmation: DS.attr("string"),
  avatar: DS.attr('list'),
  first_name: DS.attr('list'),
  last_name: DS.attr('list'),
});


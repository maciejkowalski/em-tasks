// for more details see: http://emberjs.com/guides/models/defining-models/

EmTasks.User = DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr("string"),
  passwordConfirmation: DS.attr("string"),
  avatar: DS.attr('list'),
  firstName: DS.attr('list'),
  lastName: DS.attr('list'),
});


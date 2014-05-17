// for more details see: http://emberjs.com/guides/models/defining-models/

EmTasks.Task = DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr("string"),
  password_confirmation: DS.attr("string"),
  avatar: DS.belongsTo('list'),
  first_name: DS.belongsTo('list'),
  last_name: DS.belongsTo('list'),
});


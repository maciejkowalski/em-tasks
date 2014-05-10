// for more details see: http://emberjs.com/guides/models/defining-models/

EmTasks.Task = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr("string"),
  list: DS.belongsTo('list')
});
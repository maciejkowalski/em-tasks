// for more details see: http://emberjs.com/guides/models/defining-models/

EmTasks.Comment = DS.Model.extend({
    content: DS.attr('string'),
    task: DS.belongsTo('task'),
    user: DS.belongsTo("user")
});

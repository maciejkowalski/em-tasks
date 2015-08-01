// for more details see: http://emberjs.com/guides/models/defining-models/

EmTasks.Comment = DS.Model.extend({
    content: DS.attr('string'),
    task: DS.belongsTo('task'),
    user: DS.belongsTo("user"),
    created_at: DS.attr("string"),
    user_name: DS.attr("string"),
    user_email: DS.attr("string"),
    user_avatar: DS.attr("string")
});

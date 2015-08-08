// for more details see: http://emberjs.com/guides/models/defining-models/

EmTasks.Attachment = DS.Model.extend({
    url: DS.attr("string"),
    file_name: DS.attr("string"),
    attachment: DS.attr('string'),
    task: DS.belongsTo('task'),
    user: DS.belongsTo("user"),
    created_at: DS.attr("string"),
    updated_at: DS.attr("string")
});

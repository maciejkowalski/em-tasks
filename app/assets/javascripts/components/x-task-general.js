EmTasks.XTaskGeneralComponent = Ember.Component.extend({
    actions: {
        editTaskName: function() {
            this.toggleProperty('isEditingName');
        },

        editTaskDescription: function () {
            this.toggleProperty('isEditingDescription');
        },

        acceptNameChanges: function(name) {
            console.log('acceptChanges name, this', name, this);
            this.toggleProperty('isEditingName');

            this.task.save()
        },

        acceptDescriptionChanges: function (description) {
            this.toggleProperty('isEditingDescription');

            this.task.save()
        },

        addComment: function() {
            var store = this.get("targetObject.store");
            var task = this.task;

            var comment = store.createRecord('comment', {
                content: task.get("newComment"),
                task: task,
                user: window.currentUser
            }).save();

            task.set('newComment', '');
        }

    },

    isEditingName: false,
    isEditingDescription: false
});
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
            console.log("addComment window.gon.current_user.user.id", window.gon.current_user.user.id);
            var store = this.get("targetObject.store");
            var task = this.task;

            var user = store.find("user", window.gon.current_user.user.id).then(function(user) {
                console.log("INSIDE!")

                var comment = store.createRecord('comment', {
                    content: task.get("newComment"),
                    task: task,
                    user: user
                }).save();

                task.set('newComment', '');

            });


        }

    },

    isEditingName: false,
    isEditingDescription: false
});
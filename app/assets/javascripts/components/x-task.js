EmTasks.XTaskComponent = Ember.Component.extend({
    actions: {
        editTask: function() {
            this.toggleProperty('isEditingTask');
        },

        acceptChanges: function(name) {
            this.toggleProperty('isEditingTask');

            if (Ember.isEmpty(name)) {
                this.send('removeTask');
            } else {
                this.task.save()
            }
        },

        removeTask: function() {
            if (confirm("Are you sure?")) {
                this.task.destroyRecord();
            }
        }
    },

    isEditingTask: false
});
EmTasks.XListComponent = Ember.Component.extend({
    isEditingList: false,
    actions: {
        editList: function() {
            this.toggleProperty('isEditingList');
        },

        acceptChanges: function (paramChanged) {
            this.toggleProperty('isEditingList');

            if (Ember.isEmpty(paramChanged)) { // name is empty
                this.send('removeList');
            } else {
                this.list.save();
            }
        },

        removeList: function () {
            this.list.destroyRecord();
        },

        destroyList: function(id) { // please confirm if it is working.
            if (confirm("Are you sure?")) {
                this.list.destroyRecord();
            }
        }
    }
});
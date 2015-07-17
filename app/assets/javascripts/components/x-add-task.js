EmTasks.XAddTaskComponent = Ember.Component.extend({
    actions: {
        addTask: function() {
            var store = this.get("targetObject.store");
            var list = this.get('list');

            var task = store.createRecord('task', {
                name: this.get('newTaskName'),
                list: list
            }).save();
            console.log('created task', task);
            return this.set('newTaskName', '');
        }
    }
});
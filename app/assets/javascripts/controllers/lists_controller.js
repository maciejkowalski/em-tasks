EmTasks.ListsController = Em.ArrayController.extend({
  addList: function() {
    this.store.createRecord('list', {
      name: this.get('newListName')
    }).save();
    return this.set('newListName', '');
  },

  destroyList: function(id) {
    if (confirm("Are you sure?")) {
      this.get('store').find('list', id).then( function(record) {
        record.destroyRecord();
      });
    }
  },
});

EmTasks.ListController = Em.ObjectController.extend({
  actions: {
    editList: function() {
      this.set('isEditingList', true);
    },

    acceptChanges: function () {
      this.set('isEditingList', false);
      var name = this.get('model.name');

      if (Ember.isEmpty(name)) {
        this.send('removeList');
      } else {
        var list = this.get('model')
        list.set('name', name);
        list.save()
      }
    },

    removeList: function () {
      var list = this.get('model');
      list.destroyRecord();
    }
  },

  addTask: function() {
    var list = this.get('model');
    console.log('list', list);

    var task = this.store.createRecord('task', {
      name: this.get('newTaskName'),
      list: list
    }).save();
    console.log('created task', task);
    return this.set('newTaskName', '');
  },

  destroyTask: function(id) {
    if (confirm("Are you sure?")) {
      this.get('store').find('task', id).then( function(record) {
        record.destroyRecord();
      });
    }
  },

  isEditingList: false,
});

EmTasks.TaskController = Em.ObjectController.extend({
  actions: {
    editTask: function() {
      this.set('isEditingTask', true);
    },

    acceptChanges: function() {
      this.set("isEditingTask", false);
      var name = this.get('model.name');

      if (Ember.isEmpty(name)) {
        this.send('removeTask');
      } else {
        var task = this.get('task');
        task.set('name', name);
        task.save()
      }
    },

    removeTask: function() {
      var task = this.get('model');
      task.destroyRecord();
    }
  },

  isEditingTask: false,
});

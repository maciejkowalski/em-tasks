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
      this.set('isEditing', true);
    },
    acceptChanges: function () {
      this.set('isEditing', false);
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
  isEditing: false
})

EmTasks.ListsController = Em.ArrayController.extend({
  addList: function() {
    this.store.createRecord('list', {
      name: this.get('newListName')
    }).save();
    return this.set('newListName', '');
  },

  destroyList: function(id) {
    this.get('store').find('list', id).then( function(record) {
      record.destroyRecord();
    });
  },
});

EmTasks.ListController = Em.ObjectController.extend({
  actions: {
    editList: function() {
      this.set('isEditing', true);
    },
    acceptChanges: function () {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('model.name'))) {
        this.send('removeList');
      } else {
        console.log('get model', this.get('model'));
        this.get('model').save();
      }
    },
    removeList: function () {
      var list = this.get('model');
      list.destroyRecord();
    }
  },
  isEditing: false
})

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
  }
});

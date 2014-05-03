EmTasks.ListsController = Em.ArrayController.extend({
  addList: function() {
    EmTasks.List.createRecord({
      name: this.get('newListName')
    });
    return this.set('newListName', '');
  }
});

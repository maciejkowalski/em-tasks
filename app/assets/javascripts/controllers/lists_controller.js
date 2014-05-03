EmTasks.ListsController = Em.ArrayController.extend({
  addList: function() {
    this.pushObject({
      name: this.get('newListName')
    });
    return this.set('newListName', '');
  }
});

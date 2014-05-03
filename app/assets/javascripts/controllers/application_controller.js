EmTasks.ApplicationController = Em.Controller.extend({
  lists: [],

  addList: function() {
    this.lists.pushObject({
      name: this.get('newListName')
    });
    return this.set('newListName', '');
  }
});

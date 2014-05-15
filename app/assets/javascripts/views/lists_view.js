// for more details see: http://emberjs.com/guides/views/

EmTasks.ListsView = Ember.View.extend({
  templateName: 'lists',

  submit: function() {
    this.get('controller').send('addList');
    return false;
  }
});



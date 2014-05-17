EmTasks.ProfileController = Em.ObjectController.extend({
  content: null,
  currentUser: null,

  init: function() {
    _this = this;

    Ember.$.getJSON('/users/user').then( function(response) {
      _this.store.find('user', response.user.id).then( function(record) {
        _this.set('model', record);
      });
    });
  }
});

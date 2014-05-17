EmTasks.ProfileController = Em.ObjectController.extend({
  content: null,
  currentUser: null,

  init: function() {
    _this = this;

    Ember.$.getJSON('/users/user').then( function(response) {
      var user = response.user;
      var model = _this.store.createRecord('user', {
        email: user.email,
        avatar: user.avatar,
        firstName: user.first_name,
        lastName: user.last_name,
        id: user.id,
      });
      _this.set('model', model);
    });
  }
});

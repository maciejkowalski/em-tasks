EmTasks.ProfileController = Em.ObjectController.extend({
  content: null,
  currentUser: null,

  init: function() {
    _this = this;

    Ember.$.getJSON('/users/user').then( function(response) {
      var model = _this.store.createRecord('user', response.user);
      _this.set('model', model);
    });
  }
});

EmTasks.ProfileController = Ember.Controller.extend({
  content: null,
  currentUser: null,
  self: null,

  init: function () {
    var user = window.gon.current_user.user;
    self = this;

    self.store.find('user', user.id).then(function (record) {
        self.set('model', record);
    });
  },

  actions: {
      updateProfile: function() {
          this.model.save();
      }
  }
});

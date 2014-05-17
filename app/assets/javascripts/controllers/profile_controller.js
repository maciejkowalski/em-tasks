EmTasks.ProfileController = Em.ObjectController.extend({
  content: null,
  currentUser: null,

  init: function() {
    self = this;

    Ember.$.getJSON('/users/user').then( function(response) {
      self.store.find('user', response.user.id).then( function(record) {
        self.set('model', record);
      });
    });
  },

  updateProfile: function() {
    var model = self.get('model');
    model.save();
  }
});

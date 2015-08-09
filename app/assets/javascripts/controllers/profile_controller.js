EmTasks.ProfileController = Ember.Controller.extend({

  actions: {
      updateProfile: function() {
          this.model.save();
      }
  }
});

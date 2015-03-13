// For more information see: http://emberjs.com/guides/routing/

EmTasks.Router.map(function(){
  this.route("lists", {
    path: '/'
  });

  this.route('profile', {
    path: '/profile'
  });
});

EmTasks.ListsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('list');
  }
});

EmTasks.ProfileRoute = Em.Route.extend({
  model: function() {
    self = this;
    Ember.$.getJSON('/users/user').then( function(response) {
      self.store.find('user', response.user.id).then( function(record) {
        return record;
        // self.set('model', record);
      });
    });
  },

  setupController: function(controller, model) {
    var navbarView = EmTasks.NavbarView.create();
    console.log('view', navbarView);
    navbarView.replaceIn("#navbar_user");
    this._super

  },
});

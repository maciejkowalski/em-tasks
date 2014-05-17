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
    Ember.$.getJSON('/users/user').then( function(response) {
      console.log('response', response);
    });
  }
});

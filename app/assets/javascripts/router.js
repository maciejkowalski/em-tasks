// For more information see: http://emberjs.com/guides/routing/

EmTasks.Router.map(function(){
  return this.route("lists", {
    path: '/'
  });
});

EmTasks.ListsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('list');
  }
});


// For more information see: http://emberjs.com/guides/routing/

EmTasks.Router.map(function(){
  this.route("lists", {
    path: '/'
  });

  this.route('profile', {
    path: '/profile'
  });

  this.resource("task", {path: "/task/:task_id"}, function () {
      this.route('edit', {path: "edit"});
  });
});

EmTasks.TaskRoute = Ember.Route.extend({
    model: function (params) {
//        var url = this.get('router.url');
//        var id = url.split("/")[2]
        //resp = Ember.$.getJSON("/tasks/" + id)
        //console.log("resp:", resp);
        return this.store.find("task", params.task_id);
    }
});

EmTasks.ListsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('list');
  },

  actions: {
      addList: function(param) {
          this.store.createRecord('list', {
              name: $("#list_name").val()
          }).save();
          $("#list_name").val('');
      }
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
    this._super;
  }
});

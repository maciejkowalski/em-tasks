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

EmTasks.ApplicationRoute = Ember.Route.extend({
    model: function () {
        console.log('ApplicationRoute!');
        var user = window.gon.current_user.user;
        window.currentUser = this.store.find('user', user.id);

        return window.currentUser;
    },


    setupController: function(controller, model) {
        console.log("ApplicationRoute setupController this", this);
        this._super(controller, model);

//    var navbarView = EmTasks.NavbarView.create();
//    console.log('view', navbarView);
//    navbarView.replaceIn("#navbar_user");
    }
});

EmTasks.TaskRoute = Ember.Route.extend({
    model: function (params) {
        console.log('TaskRoute');

//        var url = this.get('router.url');
//        var id = url.split("/")[2]
        //resp = Ember.$.getJSON("/tasks/" + id)
        //console.log("resp:", resp);
        return this.store.find("task", params.task_id);
    }
});

EmTasks.ListsRoute = Ember.Route.extend({
  model: function() {
      console.log('ListsRoute');
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

// TODO: fix navbar-view
EmTasks.ProfileRoute = Ember.Route.extend({
  model: function() {
      console.log('ProfileRoute');
      return window.currentUser;
  }
});

EmTasks.TaskEditController = Ember.Controller.extend({

    init: function () {
        this.lists = this.store.find('list');
    },

    actions: {
        changeList: function () {
            var newValue = $(".js-select-form").val();

            if (!newValue) return;
            var self = this;

            this.store.find('list', newValue).then(function (list) {
                console.log('after find -> this', this);
                self.model.set('list', list);
                self.model.save()
            });
        }
    }
});


EmTasks.XDueDateComponent = Ember.Component.extend({
    actions: {
        destroyAttachment: function(id) {
            var store = this.get("targetObject.store");

            if (confirm("Are you sure?")) {
                store.find('attachment', id).then(function (attachment) {
                    attachment.destroyRecord()
                });
            }
        }
    },
    didInsertElement: function() {
        var self = this;
        var dueDate = self.task.get('due_date');

        $('.datetimepicker').datetimepicker({
            locale: 'pl',
            sideBySide: true,
            calendarWeeks: true,
            defaultDate: dueDate && moment(dueDate)
        });

        $(document).ready(function() {
            $(".datetimepicker").on('dp.change', function(e) {
                var store = self.get("targetObject.store");
                self.task.set("due_date", e.date);

                self.task.save()
            });
        });
    },

    willDestroyElement: function() {
        $('.datetimepicker').datetimepicker('destroy');
    }
});
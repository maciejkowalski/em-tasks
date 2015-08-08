EmTasks.XFileUploadComponent = Ember.Component.extend({
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
        $('.file-uploader').fileupload({
            dataType: 'json',
            method: 'POST',
            url: '/attachments',
            paramName: 'file',
            autoUpload: true,
            add: function (e, data) {
                //console.log("add: e, data", e, data);
                data.submit();
            },
            submit: function (e, data) {
                //console.log("jquery submit this, self", $(this), self, self.task);
            },
            done: function (e, data) {
                var store = self.get("targetObject.store");
                var attachment = data.result.attachment;
                attachment.task = self.task;

                store.push("attachment", attachment);
                self.sendAction('saveComplete');
            },
            fail: function (e, data) {
                console.log('failed', e);
                self.sendAction('saveFailed');
            }
        });
    },

    willDestroyElement: function() {
        $('.file-uploader').fileupload('destroy');
    }
});
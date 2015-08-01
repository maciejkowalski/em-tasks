EmTasks.EditInputView = Ember.TextField.extend({
  didInsertElement: function () {
    this.$().focus();
  }
});
Ember.Handlebars.helper('edit-input', EmTasks.EditInputView);


// http://ember.zone/a-simple-auto-expanding-textarea-component/
EmTasks.EditTextAutoExpandingView = Ember.TextArea.extend({
    didInsertElement: function(){
        Ember.run.next(function() {
            this.$().focus();
            this.$().on('keypress', function(e) {
                var textArea = $(this);
                var newHeight = this.scrollHeight + parseFloat(textArea.css("borderTopWidth")) +
                                parseFloat(textArea.css("borderBottomWidth"));

                while(textArea.outerHeight() < newHeight) {
                    $(this).height($(this).height() + 1);
                }
            });
        }.bind(this));
    },

    willDestroyElement: function() {
        this.$().off('keypress');
    }
});
Ember.Handlebars.helper('edit-text', EmTasks.EditTextAutoExpandingView);

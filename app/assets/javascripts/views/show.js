window.JournalApp.Views.Show = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.model, "edit", this.makeChange);
  },

  events: {
    "click #delete-btn":"deletePost",
  },

  template: JST['show'],

  deletePost: function() {
    this.model.destroy();
  },

  makeChange: function() {
    // need to save the new data when user submits new info
    this.model.save();
  },

  render: function(){
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  // editPost: Backbone.history.
});
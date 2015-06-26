window.JournalApp.Views.Show = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.model, "edit", this.makeChange);
  },

// events: {
//   "click #edit_post":"editPost",
// },

  template: JST['show'],

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
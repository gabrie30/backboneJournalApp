JournalApp.Views.PostIndexItem = Backbone.View.extend({
  tagName: "li",
  template: JST["postIndexItem"],

  events: {
    "click #delete-btn" : "removePost",
    "click #edit-post": "editPost"
  },

  editPost: function() {
    Backbone.history.navigate("/posts/" + "edit/" + this.model.id, {trigger: true});
  },

  removePost: function(event) {
    this.model.destroy();
    Backbone.history.navigate("", {trigger: true});
  },

  render: function() {
    var content = this.template({ post: this.model});
    this.$el.html(content);
    return this;
  },
});
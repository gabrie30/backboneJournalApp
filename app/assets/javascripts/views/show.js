window.JournalApp.Views.Show = Backbone.View.extend({

  initialize: function(options) {
    this.listenTo(this.model, "edit", this.makeChange);
    this.id = options.id;
  },

  events: {
    "click #delete-btn":"deletePost",
  },

  template: JST['show'],

  deletePost: function() {
    this.collection.getOrFetch(this.id).destroy();
    Backbone.history.navigate("", {trigger: true});
  },

  makeChange: function() {
    // need to save the new data when user submits new info
    this.collection.getOrFetch(id).save();
  },

  render: function(){
    var content = this.template({post: this.collection.getOrFetch(this.id)});
    this.$el.html(content);
    return this;
  },

  // editPost: Backbone.history.
});
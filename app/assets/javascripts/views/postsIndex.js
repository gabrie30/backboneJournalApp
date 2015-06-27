JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST["postIndex"],

  initialize: function() {
    this.listenTo(this.collection, "remove", this.render);
    this.listenTo(this.collection, "reset", this.render);
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, "change", this.render);
  },

  events: {
    "click #new_post": "newPost"
  },

  newPost: function() {
    Backbone.history.navigate("#/posts/new", {trigger: true});
  },

  render: function() {

    // $("body").append(this.template({ posts: this.collection}));

    this.$el.html(this.template({ posts: this.collection}));

    this.collection.each(function(post) {
      var newPost = new JournalApp.Views.PostIndexItem({model: post});
      // this.collection.add(newPost);
      this.$el.append(newPost.render().$el);
    }.bind(this));

    // $("body").html(this.template({ posts: this.collection}));

    return this;
  },

});
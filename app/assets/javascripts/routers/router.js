window.JournalApp.Routers.Router = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.posts = new JournalApp.Collections.Posts();
    this.posts = options.posts;
  },

 routes: {
  "": "root",
  "posts/new": "newPost",
  "posts/edit/:id": "edit",
  "posts/:id": "show",
 },


 newPost: function(event) {
  var newPost = new JournalApp.Models.Post();
  var newPostView = new JournalApp.Views.NewPost({model: newPost, collection: this.posts});
  this._swapView(newPostView);
 },

 edit: function(id) {
  var editPost = new JournalApp.Views.PostForm({model: this.posts.getOrFetch(id)});
  this._swapView(editPost);
 },

 root: function() {

    // This router method should remove the router's _currentView, 
    // if one exists, and then null out the _currentView.

    if (this.currentView) {
      this.currentView.remove();
      this.currentView = null;
    }
    // this.posts.fetch({
    //   reset: true,
    //   success: function () {
        
    //     // var allPosts = new JournalApp.Views.PostsIndex({collection: this.posts});
    //     // this._swapView(allPosts);
    //     // $("#sidebar").html(allPosts.render().el);

    //     // var index = new JournalApp.Views.PostsIndex({collection: posts});
    //     // index.render();
    //   }.bind(this)
    // });
    // var index = new JournalApp.Views.PostsIndex({collection: });
    // index.render();

 },

 show: function(id) {
    
    this.posts.fetch({
      success: function() {
        var post = new JournalApp.Views.Show({collection: this.posts, id: id});
        this._swapView(post);
      }.bind(this)
    });

    // var post = new JournalApp.Views.Show({model: this.posts.getOrFetch(id)});
    // post.render();
    // $("body").html(post.render().$el);

  },

  _swapView: function(view) {

    if (this.currentView) {
      // remove is the prefered method here, we could use SL but remove does that for us
      this.currentView.remove();
      // this.currentView.stopListeningTo();
    }
      this.currentView = view;
      // Changed from HTML, which didn't work for some reason???
      $("#content").html(view.render().$el);

  },

});
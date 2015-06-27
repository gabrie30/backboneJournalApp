window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    $('<div id="sidebar">');
    $('<div id="content">');

    //try to put the sidebar index here...
    this.posts = new JournalApp.Collections.Posts();

    this.posts.fetch({
      success: function() {
        var allPosts = new JournalApp.Views.PostsIndex({collection: this.posts});
        $("#sidebar").html(allPosts.render().el);
      }.bind(this)
    });
    

    // var sidebar = new JournalApp.Views.PostsIndex();

    new JournalApp.Routers.Router({$rootEl: $("body"), posts: this.posts});
    // var posts = new JournalApp.Collections.Posts();
    // posts.fetch({
    //   reset: true,
    //   success: function () {
        
    //     var allPosts = new JournalApp.Views.PostsIndex({collection: posts});
    //     allPosts.render();

    //     // var index = new JournalApp.Views.PostsIndex({collection: posts});
    //     // index.render();
    //   }.bind(this)
    // });
    // // var index = new JournalApp.Views.PostsIndex({collection: });
    // // index.render();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});

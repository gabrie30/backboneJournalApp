window.JournalApp.Views.NewPost = Backbone.View.extend({

  events: {
    "submit form": "newPost"
  },

  template: JST["newPost"],

  newPost: function(event) {
    event.preventDefault();
    var contents = $(event.currentTarget).serializeJSON()["post"];
    this.model.set(contents);
    this.model.save({},{
      success: function() {
        this.collection.add(this.model);
        Backbone.history.navigate(("/posts/"+this.model.id), {trigger:true});
        alert("You've submitted a post!");
      }.bind(this)
    });

  },


  render: function() {
    var content = this.template({post: this.model});
    // content.serializeJSON()["post"]
    this.$el.html(content);
    return this;
  }
});
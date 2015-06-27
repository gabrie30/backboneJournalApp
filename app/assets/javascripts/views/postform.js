window.JournalApp.Views.PostForm = Backbone.View.extend({
  
  url: function(){
    return "posts/" + this.model.get("id");
  },

  events: {
    "submit form": "submit"
  },

  template: JST["post_form"],

  render: function() {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON()["post"];
    this.model.set(params);
    this.model.save({}, {
      wait: true,
      success: function(){
        Backbone.history.navigate(("posts/" + this.model.id), {trigger: true});
      }.bind(this)
    });
  },
});
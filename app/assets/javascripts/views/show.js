window.JournalApp.Views.Show = Backbone.View.extend({

  initialize: function(options) {
    this.listenTo(this.model, "edit", this.makeChange);
    this.id = options.id;
    this.editing = false;
  },

  events: {
    "click #delete-btn":"deletePost",
    "dblclick div.post-body": "beginEditing",
    "click .editingPost": "endEditing",
    "copy": "copy"
  },

  copy: function() {
    alert("Why you copying that?!");
  },

  template: function() {
    return this.editing ? JST['editing'] : JST['show'];
  },

  endEditing: function(event) {
    this.editing = false;
    event.preventDefault();
    var model = this.collection.getOrFetch(this.id);
    var editedContent = $("textarea#edit-post-body").val();
    model.set(editedContent);

    model.save({body: editedContent},{
      success: function() {
      }.bind(this)
    });

    this.render();
  },

  beginEditing: function() {
    this.editing = true;
    this.render();
  },

  deletePost: function() {
    this.collection.getOrFetch(this.id).destroy();
    Backbone.history.navigate("", {trigger: true});
  },

  makeChange: function() {
    // need to save the new data when user submits new info
    this.collection.getOrFetch(id).save();
  },

  render: function(){
    var content = this.template()({post: this.collection.getOrFetch(this.id)});
    this.$el.html(content);
    return this;
  },

  // editPost: Backbone.history.
});
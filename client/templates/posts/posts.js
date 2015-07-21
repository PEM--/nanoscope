Template.posts.created = function () {
  this.autorun(function () {
    this.subscription = Meteor.subscribe('posts');
  }.bind(this));
};

Template.posts.helpers({
  posts: function() {
    return Posts.find();
  }
});

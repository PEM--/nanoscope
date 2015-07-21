Posts.allow({

  insert: function(userId) {
    return true;
  },

  update: function(userId, post) {
    return true;
  },
  remove: function(userId, post) {
    return userId;
  }
});

if (Meteor.isClient) {

  Template.postItem.helpers({
    upvotedClass: function() {
      var userId = Meteor.userId();
      if (!_.include(this.upvoters, userId) && userId && userId != this.userId) {
        return 'btn-primary upvotable';
      } else {
        return 'disabled';
      }
    },
  });

  Template.postItem.events({
    'click .upvotable': function(e) {
      e.preventDefault();
      Meteor.call('upvote', this._id);
    }
  });

}

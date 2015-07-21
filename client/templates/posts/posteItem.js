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

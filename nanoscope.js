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

Meteor.methods({
  post: function(title, url) {
    console.log("Called");
    try {
      check(title, String);
      check(url, String);
      var A = Meteor.user();
      var post = {
        userId: A && A._id,
        author: A && A.emails[0].address,
        title: title,
        Url: url
      };
      Posts.insert(post);

    } catch (error) {
      console.warn('Post failed', error);
    }
  },
  upvote: function(postId) {
    console.log("Upvote called");
    try {
      check(postId, String);
      var user = Meteor.user();
      if (!user) return false;

      Posts.update({
        _id: postId,
        upvoters: {
          $ne: user._id
        }
      }, {
        $addToSet: {
          upvoters: user._id
        },
        $inc: {
          votes: 1
        }
      });
    } catch (error) {
      console.warn('Post failed', error);
    }
  }
});

if (Meteor.isClient) {

  Template.postItem.helpers({
    upvotedClass: function() {
      var userId = Meteor.userId();
      if (!_.include(this.upvoters, userId)) {
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

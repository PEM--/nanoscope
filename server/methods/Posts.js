Meteor.methods({
  post: function(title, url) {
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

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

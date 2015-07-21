Posts = new Mongo.Collection('posts');

var Schemas = {};

Schemas.Posts = new SimpleSchema({
  Url: {
    type: String,
    label: "URL",
    regEx: SimpleSchema.RegEx.Url
  },
  title: {
    type: String,
    label: "Title",
    max : 200
  },
  author: {
    type: String,
    label: "Author",
    max : 200,
    min : 2,
    optional : true
  },
  upvoters : {
    type : [String],
    defaultValue : [],
    optional : true
  },
  votes : {
    type : Number,
    defaultValue : 0,
    optional : true
  }
});

Posts.attachSchema(Schemas.Posts);


Posts.before.insert(function (userId, doc) {
  doc.userId = userId;
});

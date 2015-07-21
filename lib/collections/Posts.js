Posts = new Mongo.Collection('posts');

PostSchema = new SimpleSchema({
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
    min : 2
  }
});

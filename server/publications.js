/**
 * Publish all posts
 */
if(Meteor.users.find().count() === 0)
{
    var sachaId = Accounts.createUser({
    profile: {
      name: 'Minh Tâm'
    },
    username: "tamminh",
    email: "tamminh96@shopapp.com",
    password: "tamminh",
  });
  var sacha = Meteor.users.findOne(sachaId);
}
Meteor.publish('posts', function () {
  return Posts.find({}, { sort: { createdAt: -1 }, limit: 30 });
});

/**
 * Publish posts with all the creators profiles
 */
Meteor.publishComposite('postsWithUsers', {
  find: function() {
    return Posts.find({}, { sort: { createdAt: -1 }, limit: 30 });
  },
  children: [{
    find: function(post) {
      return Meteor.users.find({ _id: post.createdBy }, { fields: { profile: 1 } });
    }
  }]
});

/**
 * Publish one post specifically with its creator profile
 */
Meteor.publishComposite('onePostWithUser', function(postId) {
  check(postId, String);
  return {
    find: function() {
      return Posts.find({ _id: postId });
    },
    children: [{
      find: function(post) {
        return Meteor.users.find({ _id: post.createdBy }, { fields: { profile: 1 } });
      }
    }]
  }
});

Meteor.publishComposite('comments', {
    find: function() {
        return Comments.find({}, { sort: { createdAt: -1 }});
    },
    children: [{
        find: function(comment) {
            return Meteor.users.find({ _id: comment.createdBy }, { fields: { profile: 1 } });
        }
    }]
});

Meteor.publish('categories',function(){
    return Categories.find({});
});
Meteor.publish('authors',function(){
   return Author.find({},{limit: 1});
});
Meteor.publish('carts', function () {
    return Carts.find();
})
Meteor.publish('descs', function () {
    return Descriptions.find();
})

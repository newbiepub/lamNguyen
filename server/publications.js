/**
 * Publish all posts
 */
if(Meteor.users.find().count() === 0)
{
    var sachaId = Accounts.createUser({
    profile: {
      name: 'Lâm Nguyễn'
    },
    username: "lam",
    email: "lam@example.com",
    password: "123456",
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
})

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
Meteor.publish('comments',function(){
    return Comments.find({},{sort: {createdAt: -1}});
});

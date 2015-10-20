Template.other_post.onRendered(function () {
    this.subscribe('postsWithUsers');
});
Template.other_post.helpers({
    posts: function () {
        //var count = Posts.find().count();
        //var rand = Math.floor(Math.random() * count);
        return Posts.find({ "_id": { "$not": Router.current().params._id }},{limit: 4});
    }
});

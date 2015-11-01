Template.popular_post.helpers({
    posts: function () {
        return Posts.find({_id: {$not:Router.current().params._id}}, { limit: 5});
    }
});
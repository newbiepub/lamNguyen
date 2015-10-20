Template.post.helpers({
	category: function() {
		var post = 	Posts.findOne(Router.current().params._id);
		return Categories.findOne(post.category).name;
	},
	post: function() {
		return Posts.findOne(Router.current().params._id);
	},
	comments: function() {
		return Comments.find({postId: Router.current().params._id});
	}
});

Template.post.onRendered(function() {
    //Meteor.call('updateViews', Router.current().params._id);
    this.subscribe('onePostWithUser', Router.current().params._id);
	this.subscribe('comments');
});

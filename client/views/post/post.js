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
	},
	errorMessage: function (field) {
		return Session.get('commentSubmitErrors')[field];
	},
	errorClass: function (field) {
		return !!Session.get('commentSubmitErrors')[field] ? 'has-error' : '';
	}

});

Template.post.onRendered(function() {
    //Meteor.call('updateViews', Router.current().params._id);
    this.subscribe('onePostWithUser', Router.current().params._id);
	this.subscribe('comments');
	Session.set('checkUser', {});
});
Template.post.events({
	'click #add-carts': function (e, template) {
		console.log("Clicked !!!");
		var UserId = Carts.find({createdBy: Meteor.userId()}).count();
		console.log(""+UserId);
		var id = template.data._id;
		var posts = Posts.findOne({_id : id});
		var sanpham =[];
		sanpham.push(id);
		console.log(''+posts.price);
		var carts = {
			postId:sanpham,
			total:posts.price
		};


		if(UserId === 0){
			Meteor.call('cartsInsert',carts,function (error, commentId) {
				if (error) {
					throwError(error.reason);
				}
			});
		}else{
			Meteor.call('updateCarts',Router.current().params._id);
		}
	}
});

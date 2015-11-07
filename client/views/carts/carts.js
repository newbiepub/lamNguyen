/**
 * Created by lam on 31/10/2015.
 */
Template.carts.helpers({
   posts: function () {
       var postIds = [];
        postIds = (_.map(Carts.find({createdBy: Meteor.userId()}).fetch(), function (cart) {
           return cart.postId;
       }))[0];
       var posts = [];
       postIds.forEach(function (post) {
           posts.push(Posts.findOne({_id: post}));
       });
       return posts;
   },
    cartItems: function () {
        var items = (_.map(Carts.find({createdBy: Meteor.userId()}).fetch(), function (cart) {
            return cart.postId;
        }))[0];
        return items.length;
    },
    total: function () {
        return Carts.findOne({createdBy:Meteor.userId()}).total;
    },
    cartDesc: function(){
        return Descriptions.findOne().cartsdesc;
    },
    phone: function () {
        return Carts.findOne({createdBy:Meteor.userId()}).phoneNum;
    },

});
Template.carts.events({
    'click #btn-remove': function (e) {
        e.preventDefault();
        if (confirm("Bạn có muốn xóa sản phẩm này")) {
            Meteor.call('delCarts',this._id);
        }
    },
    'submit form':function(e){
        var val = $(e.target).find('[name=phoneNumber]').val();
        Meteor.call('cartUpdateNumber',val,function(err){
            if(err)
                console.log(err);
        });
    }
})
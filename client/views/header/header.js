Template.header.onRendered(function(){
   this.subscribe("postsWithUsers"); 
    this.subscribe("categories");
    this.subscribe('carts')
});
Template.header.helpers({
   navItems:function(){
       return Posts.find({category:this._id},{sort:{createdAt:-1},limit: 6});
   }, 
    categories:function(){
        return Categories.find({});
    },
    getName: function(){
        return Meteor.user().profile.name;
    },
    getCart:function(){
        return Carts.findOne({createdBy: Meteor.userId()}).total;
    }
});
Template.category.onRendered(function(){
   this.subscribe('postsWithUsers'); 
});
Template.category.helpers({
    posts:function(){
        return Posts.find({});
    }
});
Template.category.events({
   'click #clicked_item':function(){
       Router.go('/posts/'+this._id);
   } 
});
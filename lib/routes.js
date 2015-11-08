/**
 * Add your routes here
 */

Router.configure({
  layoutTemplate: 'layout',
});
Router.route('/', {
	name: 'home',
    waitOn: function () {
        Meteor.subscribe('descs');
    },
    fastRender: true
});

Router.route('/posts/:_id', {
	name: 'post',
    data: function() { return Posts.findOne(this.params._id); },
    onRun: function () {
        Meteor.call('updateViews', Router.current().params._id);
    },
    waitOn: function () {
        Meteor.subscribe('carts');
    },
    fastRender: true
});

Router.route('/category/:_id', {
    name: 'category',
    fastRender: true
});
Router.route('/comments/:_id/edit',{
    name:'commentEdit',
});
Router.route('/carts',{
    name:'carts',
    waitOn:function(){
        Meteor.subscribe('carts');
        Meteor.subscribe('postsWithUsers');
        Meteor.subscribe('descs');
    },
    fastRender:true
})

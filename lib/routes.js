/**
 * Add your routes here
 */
Router.configure({
  layoutTemplate: 'layout',
});
Router.route('/', {
	template: 'home',
});

Router.route('/posts/:_id', {
	name: 'post',
    data: function() { return Posts.findOne(this.params._id); },
    onRun: function () {
        Meteor.call('updateViews', Router.current().params._id);
    }
});

Router.route('/category/:name', {
    name: 'category'
});
Router.route('/comments/:_id/edit',{
    name:'commentEdit'
});

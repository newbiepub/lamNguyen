Template.commentItem.helpers({
    createdBy: function() {
        return this.createdBy.toString();
    },
    createdAt: function(){
        return this.createdAt.toString();
    },
    ownComment:function(){
        return this.createdBy === Meteor.userId();
    },
    getCreator: function () {
        return Meteor.users.findOne({
            _id: this.createdBy
        });
    }
});
Template.commentItem.onRendered(function(){
    this.subscribe('comments');
});

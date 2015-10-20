
Meteor.methods({
    'updateViews': function(id) {
        //var newViews = Number(Posts.findOne(id).views);
        //newViews = newViews + 1;
        //Posts.update(id,  {$set: {views: newViews}}, {validate: false });
        Posts.update(id,  {$inc: {viewsCount: 1}}, {validate: false });
    },
});

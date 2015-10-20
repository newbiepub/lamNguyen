/**
 * We declare the collection just like meteor default way
 * but changing Meteor.Collection to orion.collection.
 *
 * We can set options to that new collection, like which fields
 * we will show in the index of the collection in the admin
 */
Comments = new orion.collection('comments', {
    singularName: 'comment', // The name of one of this items
    pluralName: 'comments', // The name of more than one of this items
    title:'Comments', // The title of the page
    link: {
        /**
         * The text that you want to show in the sidebar.
         * The default value is the name of the collection, so
         * in this case is not necesary
         */
        title: 'Comments'
    },
    /**
     * Tabular settings for this collection
     */
    tabular: {
        columns: [
        /**
         * If you want to show a custom orion attribute in
         * the index table you must call this function
         * orion.attributeColumn(attributeType, key, label)
         */
            orion.attributeColumn('image', 'image', "Image"),
            orion.attributeColumn('summernote', 'body', 'Body'),
            orion.attributeColumn('createdBy', 'createdBy', "Created By"),
            orion.attributeColumn('createdAt', 'createdAt', "Created At")
        ]
    }
});
/**
 * Using dburles:collection-helpers we will add a helper to the comments
 * collection to easily get the user
 */

Comments.helpers({
    getCreator: function () {
        return Meteor.users.findOne({
            _id: this.createdBy
        });
    }
});

Meteor.methods({
    commentInsert: function(commentAttributes) {
        var user = Meteor.user();
        var post = Posts.findOne(commentAttributes.postId);
        // ensure the user is logged in
        if (!post)
            throw new Meteor.Error(422, 'You must comment on a post');
        comment = _.extend(_.pick(commentAttributes, 'postId', 'body'), {
            createdBy: user._id,
            createdAt: new Date().getTime()
        });
        return Comments.insert(comment);
    }
});

validateComment = function (comment) {
    var errors = {};
    if (!comment.body)
        errors.body =  "Please fill in a URL";

    return errors;
}

/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Comments.attachSchema(new SimpleSchema({
    /*userId: orion.attribute('hasOne', {
     type: String,
     label: orion.helpers.getTranslation('comments.schema.userId'),
     optional: false
     }, {
     collection: Meteor.users,
     // the key whose value you want to show for each Post document on the Update form
     titleField: 'profile.name',
     publicationName: 'anotherRandomString',
     }),*/
    /**
     * The image attribute is a custom orion attribute
     * This is where orion do the magic. Just set
     * the attribute type and it will automatically
     * create the form for the image.
     * WARNING: the url of the image will not be saved in
     * .image, it will be saved in .image.url.
     */
    postId: orion.attribute("hasOne", {
        type: String,
        label: "Posts",
        optional: false
    }, {
        collection: Posts,
        titleField: "title",
        publicationName: "anotherRandomString"
    }),
    image: orion.attribute('image', {
        label: orion.helpers.getTranslation('comments.schema.image'), // We use this function to make i18n work in autoform
        optional: true
    }),
    /**
     * Here its the same with image attribute.
     * summernote is a html editor.
     */
    body: orion.attribute('summernote', {
        label: orion.helpers.getTranslation('comments.schema.body') // We use this function to make i18n work in autoform
    }),
    /**
     * This attribute sets the user id of the user that created
     * this category automatically.
     */
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));

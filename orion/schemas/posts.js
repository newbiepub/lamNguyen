/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: orion.helpers.getTranslation('posts.schema.title') // We use this function to make i18n work in autoform
  },
  /**
   * The image attribute is a custom orion attribute
   * This is where orion do the magic. Just set
   * the attribute type and it will automatically
   * create the form for the image.
   * WARNING: the url of the image will not be saved in
   * .image, it will be saved in .image.url.
   */
  image: orion.attribute('image', {
      label: orion.helpers.getTranslation('posts.schema.image'), // We use this function to make i18n work in autoform
      optional: true
  }),
    summary:{
        type:String,
        optional:false,
        autoform:{
            type:'textarea',
        }
    },
  /**
   * Here its the same with image attribute.
   * summernote is a html editor.
   */
  body: orion.attribute('froala', {
      label: orion.helpers.getTranslation('posts.schema.body') // We use this function to make i18n work in autoform
  }),
  viewsCount:{
    label:"Views",
    optional:true,
    type:Number,
  },
    price:{
        type:Number,
        optional:false,
        label:"Price"
    },
  /**
   * This attribute sets the user id of the user that created
   * this post automatically.
   */
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));


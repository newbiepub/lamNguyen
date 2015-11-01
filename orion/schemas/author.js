/**
 * Now we will attach the schema for that collection.
 * Orion will automatically create the corresponding form.
 */
Author.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: 'name', // We use this function to make i18n work in autoform
        optional:true
    },
    address: {
        type: String,
        label: 'address', // We use this function to make i18n work in autoform
        optional:true
    },
    phone: {
        type: String,
        label: 'Phone', // We use this function to make i18n work in autoform
        optional: true
    },
    email: {
        type: String,
        label: 'Email', // We use this function to make i18n work in autoform
        optional: true
    },
    facebook: {
        type: String,
        label: 'Facebook', // We use this function to make i18n work in autoform
        optional: true,
        regEx:SimpleSchema.RegEx.Url
    },
    shopname: {
        type: String,
        label: 'Shop Name', // We use this function to make i18n work in autoform
        optional: true
    },
    city: {
        type: String,
        label: 'City', // We use this function to make i18n work in autoform
        optional: true
    },

    /**
     * The image attribute is a custom orion attribute
     * This is where orion do the magic. Just set
     * the attribute type and it will automatically
     * create the form for the image.
     * WARNING: the url of the image will not be saved in
     * .image, it will be saved in .image.url.
     */
    bio: orion.attribute('froala', {
        label: "Bio",
        optional:true
    })
}));
/**
 * Created by lam on 31/10/2015.
 */
Carts.attachSchema(new SimpleSchema({
    postId: orion.attribute("hasMany", {
        type: [String],
        label: "San Pham",
        optional: true
    }, {
        collection: Posts,
        titleField: "title",
        publicationName: "SanPhamPublicationName"
    }),
    total:{
      type:Number,
        label:"Tong Gia",
        optional:true
    },
    phoneNum:{
        type:String,
        label:"Số đt khách hàng",
        optional:true
    },
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));

Carts = new orion.collection('carts', {
    singularName: "carts", // The name of one of this items
    pluralName: "cart", // The name of more than one of this items
    title: "Carts", // The title of the page
    link: {
        /**
         * The text that you want to show in the sidebar.
         * The default value is the name of the collection, so
         * in this case is not necesary
         */
        title: "Carts"
    },
    /**
     * Tabular settings for this collection
     */
    tabular: {
        columns: [
            { data: 'postId', title: "Các loại hàng" },
            {data:'total',title:'Tong Gia Tien'},
            orion.attributeColumn('createdBy', 'createdBy', orion.helpers.getTranslation('posts.schema.createdBy')),
            orion.attributeColumn('createdAt', 'createdAt', orion.helpers.getTranslation('posts.schema.createdAt'))
        ]
    }
});
Meteor.methods({
    cartsInsert:function(cartAttributes){
        var user = Meteor.user();
        // ensure the user is logged in
       var carts = _.extend(_.pick(cartAttributes,'postId','total'),{
            createdBy: user._id,
            createdAt: new Date().getTime()
        });
        return Carts.insert(carts);
    },
    updateCarts: function (id) {
        var posts = _.map(Posts.find().fetch(),function(post){
            return post._id;
        })
        if(!_.contains(posts._id,id)) {
            var cart = Number(Carts.findOne({createdBy: Meteor.userId()}).total);
            var postIds = [];
            var price = Posts.findOne({_id: id}).price;
            postIds = Carts.findOne({createdBy: Meteor.userId()}).postId;
            postIds.push(id);
            cart += price;
                Carts.update({createdBy: Meteor.userId()},  {$set: {postId: postIds,total:cart}}, {validate: false });
        }
    },
    delCarts: function (id) {
        var currentCommentId = id;
        var items = (_.map(Carts.find({createdBy: Meteor.userId()}).fetch(), function (cart) {
            return cart.postId;
        }))[0];
        var newCart = Number(Carts.findOne({createdBy: Meteor.userId()}).total);
        var subCart = Number(Posts.findOne({_id: currentCommentId}).price);
        newCart = newCart - subCart;
        var index = items.indexOf(currentCommentId);
        items.splice(index,1);
        Carts.update({createdBy: Meteor.userId()},  {$set: {postId: items,total:newCart}}, {validate: false });
    }
})
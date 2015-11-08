Template.product.onRendered(function () {
    new WOW().init();
    this.subscribe("postsWithUsers");
});
Template.product.helpers({
   newProducts: function(){
       return Posts.find({},{sort:{createdAt:-1},limit: 10});
   },
    popular:function(){
        return Posts.find({viewsCount:{$gt:10}},{limit:10});
    },
    posts:function(){
     return Posts.find({},{sort:{createdAt: -1}});
    },
    popularDesc : function () {
        return Descriptions.findOne().popular;
    },
    recentDesc:function(){
        return Descriptions.findOne().recent;
    }
});
Template.product.rendered = function () {
    Meteor.setTimeout(function () {
        $('.home-owl-carousel').each(function () {
            var owl = $(this);
            owl.owlCarousel({
                items: 4,
                autoPlay: 3000,
                stopOnHover: true,
                navigation: false,
                pagination: false,
                goToFirstSpeed: 2000,
                autoHeight: true,
            });
        });
        $(".owl-next").click(function () {
            $($(this).data('target')).trigger('owl.next');
            return false;
        });
        $(".owl-prev").click(function () {
            $($(this).data('target')).trigger('owl.prev');
            return false;
        });

                //$('#popular-items-carousel').owlCarousel({
                //    items:4,
                //    autoPlay: 3000,
                //    stopOnHover: true,
                //    navigation: false,
                //    pagination: false,
                //    goToFirstSpeed: 2000,
                //    autoHeight: true,
                //});
    }, 3000);
};

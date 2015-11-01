Template.slider.onRendered(function(){
    new WOW().init();
    this.subscribe("postsWithUsers");
});
Template.slider.helpers({
   posts: function(){
       return Posts.find({},{limit: 3});
   }
});
Template.slider.rendered = function(){
    Meteor.setTimeout(function() {
        $('#owl-main').owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: true,
            navigationText: [
      "<span data-icon='#'></span>",
      "<span data-icon='$'></span>"
      ],
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
        });
    },5000);
};

Template.footer.onRendered(function () {
    this.subscribe('authors')
});
Template.footer.helpers({
    author: function () {
        return Author.find();
    }
})
Template.registerHelper('formatDate', function(date) {
  return moment(date).format('DD-MM-YYYY');
});
Handlebars.registerHelper('trimString', function(passedString) {
    var theString = passedString.substring(0,100);
    return new Handlebars.SafeString(theString)
});

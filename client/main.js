//Template.registerHelper('formatDate', function(date) {
//  return moment(date).format('DD-MM-YYYY');
//});
Handlebars.registerHelper('trimString', function(passedString) {
        var theString = passedString.substring(0,30) + "...";
        return new Handlebars.SafeString(theString);
});
Template.registerHelper('formatCurrency',function(numb){
   return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "đ"; 
});
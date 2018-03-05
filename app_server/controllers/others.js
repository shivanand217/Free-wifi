
/** About Page */
// About Page controller
module.exports.about = function(request, response) {
    response.render('generic-text', {title: 'About'});
}
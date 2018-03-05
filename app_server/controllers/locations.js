
/** Get home page */
// home page controller
module.exports.homelist = function(request, response) {
    response.render('locations-list', {title: 'Home'});
};

/** Get location-info page */
// location-info page controller
module.exports.locationInfo = function(request, response) {
    response.render('location-info', {title: 'Location Info'});
};

/** Get Add-Review page */
// Add-Review page controller
module.exports.addReview = function(request, response) {
    response.render('location-review-form', {title: 'Add Review'});
};




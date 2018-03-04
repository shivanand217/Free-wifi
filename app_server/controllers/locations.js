
/** Get home page */
// home page controller
module.exports.homelist = function(req, res) {
    // first argument is view to this controller and second is the title to the page
    res.render('locations-list', {title: 'Home'});
};

/** Get location-info page */
// location-info page controller
module.exports.locationInfo = function(req, res) {
    // first argument is view to this controller and second is the title to the page
    res.render('location-info', {title: 'Location Info'});
};

/** Get Add-Review page */
// Add-Review page controller
module.exports.addReview = function(req, res) {
    // first argument is view to this controller and second is the title to the page
    res.render('location-review-form', {title: 'Add Review'});
};




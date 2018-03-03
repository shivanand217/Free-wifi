
/** Get home page */
// home page controller
module.exports.homelist = function(req, res) {
    res.render('locations-list', {title: 'Home'});
};

/** Get location-info page */
// location-info page controller
module.exports.locationInfo = function(req, res) {
    res.render('index', {title: 'Location Info'});
};

/** Get Add-Review page */
// Add-Review page controller
module.exports.addReview = function(req, res){
    res.render('index', {title: 'Add Review'});
};




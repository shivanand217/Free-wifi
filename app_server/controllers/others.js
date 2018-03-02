

/** Get About Page */

// defining route using same view template but changing title to about
module.exports.about = function(req, res) {
    res.render('index', {title: 'About'});
};
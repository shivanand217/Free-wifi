var express = require('express');
var router = express.Router();

// response.render compiles the view template to send to HTML response 
var homePageController = function(request, response) {
    response.render('index', {title: 'Express'});
}

/* GET home page. */
router.get('/', homePageController);

module.exports = router;

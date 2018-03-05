var express = require('express');
var router = express.Router();

// changing main controller to the two other controllers
//var controllerMain = require('../controllers/main') 
var controllerLocations = require('../controllers/locations');
var controllerOthers = require('../controllers/others');

/* 
   Location Pages 
   Defining Location routes and map them to controller functions
*/
router.get('/', controllerLocations.homelist);
router.get('/locations', controllerLocations.locationInfo);
router.get('/location/review/new', controllerLocations.addReview);

/* Other pages */
router.get('/about', controllerOthers.about); // define other routes


module.exports = router;

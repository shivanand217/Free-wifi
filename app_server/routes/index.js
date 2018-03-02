var express = require('express');
var router = express.Router();

// here reuired main controller file main.js
var controllerMain = require('../controllers/main') 

/* GET home page. */

// reference index method of controllers in route definition
router.get('/', controllerMain.index);

module.exports = router;

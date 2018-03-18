// Mongoose interacts with the database through its models, which is why we imported
// the Locations model as 'wifi' at the top of the controller files

var mongoose = require('mongoose');

var theEarth = (function() {
    var earthRadius = 6371; // in kilometers

    var getDistanceFromRads = function(rads) {
        return parseFloat(rads * earthRadius);
    };  

    // get the angle in radians
    var getRadsFromDistance = function(distance) {
        return parseFloat(distance / earthRadius);   // theta = (l / r)
    };

    var ret_value = {
        getDistanceFromRads: getDistanceFromRads,
        getRadsFromDistance: getRadsFromDistance
    };
})();


// for talking to our database
var wifi = mongoose.model('Location');

// @params(arg1, arg2, arg3)
// arg1 is response object
// arg2 is response code
// arg3 is response content which is either JSON or XML, i am using JSON content here
var sendJsonResponse = function(response, status, content) {
    response.status(status);
    response.json(content);
}

module.exports.locationsListByDistance = function(request, response) { 
    // express gives access to the values in a query string
    // putting them into a query object attached to the request object (request.query.lng)
    // the longitude and latitude values will be strings when retreived but they need 
    // to be added to the point object as numbers 
    
    // now we can get the coordinates of longitude and latitude from query strings 
    // and create geoJSON point required by the geoNear function:

    // api/locations?lng=-0.799256256&lat=51.378566&dist=20
    var longitude = parseFloat(request.query.lng);
    var latitude = parseFloat(request.query.lat);
    var max_distance = parseInt(request.query.dist);

    var point = {
        type: "Point",
        coordinates: [longitude, latitude]
    };
    var geoOptions = {
        spherical: true,
        maxDistance: theEarth.getRadsFromDistance(max_distance),
        num: 10 // show top 10 nearest locations
    };

    wifi.geoNear(point, geoOptions, callback);
    // sendJsonResponse(response, 200, {"status": "success!!!"});
}

module.exports.locationsCreate = function(request, response) {
    sendJsonResponse(response, 200, {"status": "success!!!"});
}

module.exports.locationsReadOne = function(request, response) {
    // the parameters are held inside @param object attached to the request object
    // access the parameter with request.params.parameter_name
    
    /* With our basic controller there are three errors we need to trap
       1.  The request parameters don't include 'locationid'
       2.  The 'findById' method doesn't return a location
       3.  The 'findById' method returns an error.
    */
    
    if(request.params && request.params.locationid) {
        wifi
            .findById(request.params.locationid)
            .exec(function(err, location) {
                    if(location === null) {
                        sendJsonResponse(response, 404, {"message": "location not found"});
                        return;
                    } else if(err) {
                        sendJsonResponse(response, 404, err);
                        return;
                    } 
                    sendJsonResponse(response, 200, location);
                });
    } else {
        sendJsonResponse(response, 404, {"message": "No locationid in request"});
    }   
}   

module.exports.locationsUpdateOne = function(request, response) {
    sendJsonResponse(response, 200, {"status": "success!!!"});
}

module.exports.locationsDeleteOne = function(request, response) {
    sendJsonResponse(response, 200, {"status": "success!!!"});
}

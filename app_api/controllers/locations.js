// Mongoose interacts with the database through its models, which is why we imported
// the Locations model as 'wifi' at the top of the controller files

var mongoose = require('mongoose');
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
    sendJsonResponse(response, 200, {"status": "success!!!"});
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

/*
wifi
    .findById(request.params.locationid)
    .select('name reviews')
    .exec({
        function(err, location) {
            var review;
            review = location.reviews.id(request.params.reviewid);
        }
    }); 
*/

module.exports.locationsUpdateOne = function(request, response) {
    sendJsonResponse(response, 200, {"status": "success!!!"});
}

module.exports.locationsDeleteOne = function(request, response) {
    sendJsonResponse(response, 200, {"status": "success!!!"});
}

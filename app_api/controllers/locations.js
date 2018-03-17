// Mongoose interacts with the database through its models, which is why we imported
// the Locations model as 'wifi' at the top of the controller files


var mongoose = require('mongoose');
// for talking to our database
var wifi = mongoose.model('Location');

// @params(arg1, arg2, arg3)
// arg1 is response object
// arg2 is response code
// arg3 is response content which is either JSON or XML, i am using JSON content here
var sendJsonResponse = function(response,status,content) {

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
    sendJsonResponse(response, 200, {"status": "success!!!"});
}

module.exports.locationsUpdateOne = function(request, response) {
    sendJsonResponse(response, 200, {"status": "success!!!"});
}

module.exports.locationsDeleteOne = function(request, response) {
    sendJsonResponse(response, 200, {"status": "success!!!"});
}
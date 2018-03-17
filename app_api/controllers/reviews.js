// Mongoose interacts with the database through its models, which is why we imported
// the Locations model as 'wifi' at the top of the controller files


var mongoose = require('mongoose');
// for talking to our database
var wifi = mongoose.model('Location');


var sendJsonResponse = function(response,status,content) {
    response.status(status);
    response.json(content);
}

module.exports.reviewsCreate = function(request, response) {
    sendJsonResponse(response, 200, {"status": "success!!"});
}

module.exports.reviewsReadOne = function(request, response) {
    sendJsonResponse(response, 200, {"status": "success!!"});
} 

module.exports.reviewsUpdateOne = function(request, response) {
    sendJsonResponse(response, 200, {"status": "success!!"});
}

module.exports.reviewsDeleteOne = function(request, response) {
    sendJsonResponse(response, 200, {"status": "success!!"});
}
// Mongoose interacts with the database through its models, which is why we imported
// the Locations model as 'wifi' at the top of the controller files

var mongoose = require('mongoose');
// for talking to our database
var wifi = mongoose.model('Location');

// @params(arg1, arg2, arg3)
// arg1 is response object
// arg2 is response code
// arg3 is response content which is either JSON or XML, i am using JSON response content here
var sendJsonResponse = function(response, status, content) {
    response.status(status);
    response.json(content);
}

// response is the response object
// 200 is response code
// XML or JSON content can be used

module.exports.reviewsCreate = function(request, response) {
    sendJsonResponse(response, 200, {"status": "success!!!"});
}

/** reading a single review */
module.exports.reviewsReadOne = function(request, response) {

    if(request.params && request.params.locationid && request.params.reviewid) {

        wifi.findById(request.params.locationid)
            .select('name reviews')
            .exec(function(err, location) {
                var _response, _review;
                // errors for founding no locations
                if(location === null) {
                    sendJsonResponse(response, 404, {"message": "locationid not found"});
                    return;
                } else if(err) {
                    sendJsonResponse(response, 404, err);
                    return;
                }

                if(location.reviews && location.reviews.length > 0) {
                    _review = location.reviews.id(request.params.reviewid);
                    if(_review === null) {
                        sendJsonResponse(response, 404, {"message": "review not found"});
                    } else {
                        _response = {
                            location: {
                                name: location.name,
                                id: request.params.locationid
                            },
                            _review: _review
                        };
                        sendJsonResponse(response, 200, _response);
                    }
                } else {
                    sendJsonResponse(response, 404, {"message": "No review found"});
                }
            });
    } else {
        sendJsonResponse(response, 404, {"message": "Not found, locationid and reviewid are both required"});
    }
    
}

module.exports.reviewsUpdateOne = function(request, response) {
    sendJsonResponse(response, 200, {"status": "success!!!"});
}


module.exports.reviewsDeleteOne = function(request, response) {
    sendJsonResponse(response, 200, {"status": "success!!!"});
}
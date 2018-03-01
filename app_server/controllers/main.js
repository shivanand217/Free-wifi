
// we will creating an export method called index
/* Get home page */

module.exports.index = function(request, response) { // creating an index export method
    response.render('index',{title: 'Express'});//including controller code for home page
};


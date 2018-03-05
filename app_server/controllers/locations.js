
// First param in the view and the second parameter is the data we want to send to the view
// res.render(first_param, second_param);

// making our view more smarter
// we will sending processed data from our controller to the views

/** Get home page */
// home page controller

module.exports.homelist = function(request, response) {
    response.render('locations-list', {
        greetings: 'Hey !! Nice to see you. This App is Under Construction... Please Visit later...',

        title: 'Free-wifi Find a place to work with wifi',
        
        pageHeader: {
            title: 'Free-wifi',
            strapline: 'Find places to work with wifi near you!'
        },
        locations: [{
            name: 'Coffee World',
            address: 'RDB Boulevard, Block EP - GP, Sector 5, Salt Lake, East Kolkata, Kolkata, West-Bengal - 700098',
            rating: {val: 3,dec: 0},
            reviews: '50 reviews',
            facilities: ['Hot Drinks','Food','Premium wifi'], // Array of available facilities
            distance: '100m'
        },{
            name: 'Cafe-Coffee-Day',
            address: 'Mani Square, No.164/1, Maniktala, Eastern Metropolitan Bypass, Kolkata, West-Bengal - 700054',
            rating: {val: 4,dec: 0},
            reviews: '19 reviews',
            facilities: ['Hot Drinks','Food','Premium wifi'],
            distance: '150m'
        },{
            name: 'Barista Lavazza',
            address: 'Block EP & GP, Sector V, Bidhan Nagar, 24 Pgns, Salt Lake, Kolkata, West-Bengal - 700064',
            rating: {val: 1,dec: 0},
            reviews: '10 reviews',
            facilities: ['Snacks','Food','Premium wifi'],
            distance: '198m'
        },{
            name: 'The Coffee Bean & Tea Leaf',
            address: '2nd Floor, Quest Mall, 33, Syed Amir Ali Avenue, Beck Bagan, Ballygunge, Kolkata, West-Bengal - 700017',
            rating: {val: 5,dec: 0},
            reviews: '20 reviews',
            facilities: ['Cocktail','Snacks','Food','Premium wifi','Beer'],
            distance: '300m'
        },{
            name: 'India Coffee House',
            address: 'Chittaranjan Ave, Chandni Chawk, Bowbazar, Kolkata, West-Bengal - 700072',
            rating: {val: 4,dec: 5},
            reviews: '19 reviews',
            facilities: ['Premium wifi','Beer','Food'],
            distance: '312m'
        },{
            name: 'Citrus - The Coffee Shop',
            address: 'The Lindsay, 8A & 8B, Lindsay Street, Kolkata, West-Bengal - 700087',
            rating: {val: 3,dec: 5},
            reviews: '22 reviews',
            facilities: ['Premium wifi','Coffee','Food'],
            distance: '340m'
        },{
            name: 'The Café Store (Golpark)',
            address: '5A, Ballygunge Terrace, Dhakuria, Kankulia, Kolkata, West-Bengal - 700029',
            rating: {val: 3,dec: 0},
            reviews: '98 reviews',
            facilities: ['Premium wifi','Coffee','Cold Drinks'],
            distance: '368m'
        }]
    });
};

/** Get location-info page */
// location-info page controller
module.exports.locationInfo = function(request, response) {
    response.render('location-info', {title: 'Location Info'});
};

/** Get Add-Review page */
// Add-Review page controller
module.exports.addReview = function(request, response) {
    response.render('location-review-form', {title: 'Add Review'});
};

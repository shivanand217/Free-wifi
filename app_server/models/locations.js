
var mongoose = require('mongoose');

/** Schema for review */
var reviewSchema = new mongoose.Schema ({
    author: String,
    rating: {type: Number, required: true, min: 0,max: 5},
    reviewText: String,
    createdOn: {type: Date, "default": Date.now}
});

/** Scehma for opening time */
var openingTimeSchema = new mongoose.Schema ({
    days: {type: String, required: true},
    opening: String,
    closing: String,
    closed: {type: Boolean, required: true}
});

/** Schema for locations */
var locationsSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    address: String,
    rating: {type: Number, "default": 0, min: 0, max: 5},
    facilities: [String],
    /**
       The 2dsphere here is the critical part, as that’s
       what enables MongoDB to do the correct
       calculations when running queries and returning results. It allows MongoDB to
       calculate geometries based on a spherical object
     */
    coords: {type: [Number], index: '2dsphere'},
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});







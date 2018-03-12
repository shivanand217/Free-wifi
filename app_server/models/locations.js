import { ObjectId } from '../../../../../Users/shiva/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson';

var mongoose = require('mongoose');

/**
 * Mongoose Allowed Schema types
 * 
 * String : Any string, UTF-8 encoded
   Number: Mongoose doesn’t support long or double numbers, but it can be
   extended to do so using Mongoose plugins; the default support is enough for 
   most cases
   Date: Typically returned from MongoDB as an ISODate object
   Boolean: True or false
   Buffer: For binary information such as images
   Mixed: Any data type
   Array: Can either be an array of the same data type, or an array of nested subdocuments
   ObjectId: For a unique ID in a path other than _id; typically used to reference
    _id paths in other documents
 
  */

/** Schema for review */
var reviewSchema = new mongoose.Schema ({
    author: String,
    rating: {type: Number, required: true, min: 0, max: 5},
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

// Compile Schema into model
// first one is model into which we want to convert our Schema
mongoose.model('Location', locationsSchema);


/** adding data in reviews */

db.locations.update ({
    name: 'Barista Lavazza'
}, {
    $push: {
        reviews: {
            author: 'Jhon',
            id: ObjectId(),
            rating: 4,
            timestamp: new Date("March 13, 2018"),
            reviewText: "Coffee was not so good. Wifi was great."
        }
    }
})


/* db.locations.update ({
    name: 'Coffee World'
}, {
    $pop: { reviews: 1 } 
    } 
)*/

db.locations.save ({
    name: 'Barista Lavazza',
    address: 'Block EP & GP, Sector V, Bidhan Nagar, 24 Pgns, Salt Lake, Kolkata, West-Bengal - 700064',
    rating: 4,
    facilities: ['Snacks','Food','Premium wifi'],
    coords: [-0.9690884, 51.455041], 
    openingTimes:[
        {days: 'Monday - Friday',opening: '7:00am',closing: '7:00pm',closed: false},
        {days: 'Saturday',opening: '8:00am',closing: '5:00pm',closed:false},
        {days: 'Sunday',closed: true}]
    }
)
    

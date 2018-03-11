var mongoose = require('mongoose');
var readline = require('readline');
var gracefulShutdown;

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

if(process.platform === "win32") {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on("SIGINT",function(){
        process.emit("SIGINT");
    });
}

// creating a mongoose connection
// using database URI for our database

var dbURI = 'mongodb://localhost/Wifi';
mongoose.connect(dbURI);

/** mongoose connection events 
 *  connected, error and disconnected
 * */

mongoose.connection.on('connected',function() {
    console.log('Mongoose connected to '+ dbURI);
});

mongoose.connection.on('error',function(err) {
    console.log('Mongoose connection error: '+ err);
});

mongoose.connection.on('disconnected',function() {
    console.log('Mongoose disconnected ');
});

gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through '+msg);
    });
};

// for nodemon restarts
process.once('SIGUSR2',function() {  
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// for app termination
process.on('SIGINT',function() {
    gracefulShutdown('app termination',function(){
        process.exit(0);
    });
});
// for heroku app termination
process.on('SIGTERM',function() {
    gracefulShutdown('Heroku app shutdown', function() {
        process.exit(0);
    });
});

// close the connection if the node process ends
/*process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose default connection disconneted through app terminal');
        process.exit(0);
    });
});*/



// require our Schema for the application
require('./locations');
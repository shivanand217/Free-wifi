var mongoose = require('mongoose');
var readline = require('readline');
var gracefulShutdown;

if(process.platform === "win32") {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on("SIGINT", function() {
        process.emit("SIGINT");
    });
}

// creating a mongoose connection
// using database URI for our database

var dbURI = 'mongodb://localhost/wifi';

if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}
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
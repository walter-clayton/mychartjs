//require mongoose module
var mongoose = require('mongoose');

//require chalk module to give colors to console text
var chalk = require('chalk');


var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

//export this function and imported by server.js

// mongoose.connect('mongodb://localhost/powerlifting',  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (err) => {
//     if(err) {
//         console.log(error('Database error: ' + err));
//     } else {
//         console.log(connected('Successful connection to the Powerlifting database!')); 
//        

module.exports =function(){

    mongoose.connect('mongodb://localhost/powerlifting',  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(mongoose.connection.on('connected', function(){
        console.log(connected("Mongoose default connection is open"));
    }))

    .catch(mongoose.connection.on('error', function(err){
        console.log(error("Mongoose default connection has occured "+err+" error"));
    }));

    mongoose.connection.on('disconnected', function(){
        console.log(disconnected("Mongoose default connection is disconnected"));
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log(termination("Mongoose default connection is disconnected due to application termination"));
            process.exit(0)
        });
    });
}
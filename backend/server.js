

var express = require('express');
var app = express();

var db = require('./config/database');

var Score = require("./models/powerlifting.model");

document = new Score({ 
    squat: 160, 
    benchPress: 115, 
    deadlift: 185

});


console.log(document)


    
var port = 4000;
// call the database connectivity function
db();

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});  

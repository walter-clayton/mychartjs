

var express     = require('express');
var app         = express();
var port        = 4000;
var bodyParser  = require('body-parser');
var flash       = require('connect-flash');

// Connect to the model 
var db = require('./backend/config/database');

// var scoresRoutes       = require("./backend/routes/scores"),
 var   indexRoutes    = require('./backend/routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.set('view engine', 'ejs');

// Connect to the database
db();


app.use('/', indexRoutes);
// app.use("/scores", scoresRoutes);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});  



var express         = require('express'),
    app             = express(),
    port            = process.env.PORT || 4000,
    cookieParser    = require("cookie-parser"),
    methodOverride  = require("method-override"),
    session         = require("express-session"),
    bodyParser      = require('body-parser'),
    flash           = require('connect-flash');


var   indexRoutes    = require('./backend/routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(session({
    secret: 'secret123', 
    saveUninitialized: true,
    resave: true
}));
app.use(flash());


// Connect to the model 
var db = require('./backend/config/database');
// Connect to the database
db();


app.use('/', indexRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});  

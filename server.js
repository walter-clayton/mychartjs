

var express = require('express');
var router  = express.Router();
var app = express();
var port = 4000;
var bodyParser = require('body-parser');
// Connect to the model 
var Score = require("./backend/models/powerlifting.model");
var db = require('./backend/config/database');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Connect to the database
db();


app.get("/", (req, res) => {
    Score.find({}, function(err, documents){
        if(err){
            console.log("Something went wront in the find()");
        } else {
            console.log("here are all of the scores...");
            console.log(documents[1].squat);
            console.log(documents)

            res.render("index", {documents: documents});

        }
    });
});

app.post("/addscores", (req, res) => {
    var myData = new Score({
        squat: req.body.squat,
        benchPress: req.body.benchPress,
        deadlift: req.body.deadlift
    })
    myData.save()
        .then(item => {
            res.send("Scores saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});
    



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});  

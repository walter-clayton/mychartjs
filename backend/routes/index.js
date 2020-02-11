var express = require("express");
var router  = express.Router();
var Score = require("../models/powerlifting.model");

router.get("/", (req, res) => {
    Score.find({}, function(err, documents)
    {
        if(err){
            console.log("Something went wront in the find()");
        } else {
            console.log("here are all of the scores...");
            console.log(documents[1].squat);
            console.log(documents);
            res.render("index", {documents: documents});
            
          
        }
    });
});

router.post("/scores", (req, res) => {
    var myData = new Score({
        squat : req.body.squat,
        benchPress : req.body.benchPress,
        deadlift : req.body.deadlift
    })
    myData.save()
        .then(item => {
            res.send("Scores saved to database");
            req.flash("success", "Successfully added scores ");
            res.redirect("/"); 

        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});



router.get("/:id", (req, res) => {
    Score.findById(req.params.id)
      .then(score => res.json(score))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;
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
            console.log(documents);
            console.log(documents[0].squat);
            res.render("index", {documents: documents, message: req.flash("info") });
        }
    });
});

router.post("/", (req, res) => {
    var myData = new Score({
        squat : req.body.squat,
        benchPress : req.body.benchPress,
        deadlift : req.body.deadlift
    })
    myData.save()
        .then(item => {
            console.log("data saved");
            req.flash('info', 'Score added!')
            res.redirect("/"); 

        })
        .catch(err => {
            res.status(400).send("Unable to save to database");

        });
});



// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", function(req, res){
    Score.findById(req.params.id, function(err, documents){
        res.render("scores/edit", {documents: documents, message: req.flash("info")});
    });
});

// UPDATE SCORE ROUTE
router.put("/:id", function(req, res){
    // find and update the correct score
    Score.findByIdAndUpdate(req.params.id, req.body.documents,  function(err, updatedScore){
       if(err){
           res.send("There was an error updating your score");
       } else {
           //redirect somewhere(show page)
           req.flash('info', 'score updated!')
           res.redirect("/");
       }
    });
});


// DESTROY Score ROUTE
router.delete("/:id", function(req, res){
    Score.findByIdAndRemove(req.params.id, function(err){
       if(err){
           res.send("there was a problem");
       } else {
        req.flash('info', 'score deleted!')
        res.redirect("/");
       }
    });
 });

  module.exports = router;
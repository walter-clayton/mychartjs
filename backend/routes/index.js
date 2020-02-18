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
            req.flash("success", "you added a score!");
            res.render("index", {documents: documents, message: req.flash("success")});
            
          
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
            req.flash("info", "Hi there!");
            console.log("data saved");
            res.redirect("/"); 

        })
        .catch(err => {
            res.status(400).send("Unable to save to database");

        });
});




// find the score
router.get("/:id", function(req, res){
    Score.findById(req.params.id, function(err, documents){
        res.render("scores/show", {documents: documents});
    });
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", function(req, res){
    Score.findById(req.params.id, function(err, documents){
        res.render("scores/edit", {documents: documents});
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
           req.flash("info", "Hi there!");
           res.redirect("/" + req.params.id);
       }
    });
});


// DESTROY Score ROUTE
router.delete("/:id", function(req, res){
    Score.findByIdAndRemove(req.params.id, function(err){
       if(err){
           res.send("there was a problem");
       } else {
            req.flash('test', 'it worked');
            res.redirect("/");
       }
    });
 });

  module.exports = router;
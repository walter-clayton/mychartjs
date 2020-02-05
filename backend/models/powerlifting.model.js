var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var scoreSchema = new Schema({
                squat: Number,
                benchPress: Number,
                deadlift: Number,
            });

module.exports = mongoose.model("Score", scoreSchema);
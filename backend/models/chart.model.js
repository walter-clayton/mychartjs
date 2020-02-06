var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var chartSchema = new Schema(ctx, {
    type: 'radar',
    data: {
        labels: ['Squat', 'Bench', 'Deadlift'],
        datasets: [{
            data: [50, 10, 4]
        }]
    },
    options: {
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 50,
                suggestedMax: 200
            }
        }
    }
});

module.exports = mongoose.model("Score", scoreSchema);

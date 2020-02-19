var Chart = require('chart.js');

var ctx = 'myRadar';

var myRadar = new Radar(ctx, {
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


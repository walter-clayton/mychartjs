

var ctx = 'myRadar';

var Data = require('../backend/server');

var myChart = new Chart(ctx, Data, {
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


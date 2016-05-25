// binary search
var Grid = require('./grid');
var Calc = require('./calc');

var grid = new Grid();
var calc = new Calc();

var chosen = 0;

var run = function(x, y) {
    var arr = grid.return(x, y);
    chosen = parseInt(Math.random(0, 1) * (y + 1), 10);
    if (calc.find(x, y, chosen) === false) {
        console.log(arr);
    }
};

run(0, 150);

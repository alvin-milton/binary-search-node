var Grid = require('./grid');
var grid = new Grid();

var Calc = function() {};
var oldMin = 0;

Calc.prototype.find = function (min, max, chosen) {
    var guess;
    if (chosen < parseInt((min + max) / 2, 10)) {
        guess = parseInt((min + max) / 2, 10);
        max = guess - 1;
        console.log(chosen + ' is less than ' + guess + ' but more than ' + oldMin);
        newGrid = grid.return(oldMin, max);
        console.log(newGrid);
        this.find(oldMin, max, chosen);
    } else if (chosen > parseInt((min + max) / 2, 10)) {
        guess = parseInt((min + max) / 2, 10);
        console.log(chosen + ' is more than ' + guess + ' but less than ' + min);
        min = guess + 1;
        newGrid = grid.return(guess + 1, max);
        console.log(newGrid);
        oldMin = min;
        this.find(min, max, chosen);
    } else {
        console.log(chosen + ' has been found!');
        return false;
    }
}

module.exports = Calc;

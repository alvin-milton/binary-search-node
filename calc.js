var Grid = require('./grid');
var grid = new Grid();

var Calc = function() {};
var oldMin = 0;

Calc.prototype.lowGuess = function (guess, oldMin) {
    console.log('\nIs the number: ' + guess + '?');
    console.log('\nMy chosen number is less than ' + guess + ' but more than ' + oldMin);
};

Calc.prototype.highGuess = function (guess) {
    console.log('\nIs the number: ' + guess + '?');
    console.log('\nMy chosen number is more than ' + guess);
};

Calc.prototype.find = function (min, max, chosen) {
    var guess;
    if (chosen < parseInt((min + max) / 2, 10)) {
        guess = parseInt((min + max) / 2, 10);
        max = guess - 1;
        this.lowGuess(guess, oldMin);
        newGrid = grid.return(oldMin, max);
        this.find(oldMin, max, chosen);
    } else if (chosen > parseInt((min + max) / 2, 10)) {
        guess = parseInt((min + max) / 2, 10);
        this.highGuess(guess);
        min = guess + 1;
        newGrid = grid.return(guess + 1, max);
        oldMin = min;
        this.find(min, max, chosen);
    } else {
        console.log('The chosen number is ' + chosen);
        // return false;
    }
}

module.exports = Calc;

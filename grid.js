var Grid = function () {}

Grid.prototype.return = function(x, y) {
    gridArray = [];
    for (var i = x; i <= y; i++) {
        gridArray.push(i);
    }
    return gridArray;
};

module.exports = Grid;

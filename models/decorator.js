const Decorator = function(paintStock) {
    this.paintStock = []
};

Decorator. prototype.addPaintCan = function (paintCan) {
    this.paintStock.push(paintCan)
    let newPaintStock = this.paintStock
    return newPaintStock
};

Decorator.prototype.countLitresOfPaint = function () {
    let litresOfPaint = 0
    let decoratorLitres = this.paintStock

    for (const litre of decoratorLitres) {
        litresOfPaint += litre.litres
    }
    return litresOfPaint
};

Decorator.prototype.enoughToPaint = function (room) {
    return this.countLitresOfPaint() >= room.area;
};

Decorator.prototype.paintedTheRoom = function (room) {
    if (this.enoughToPaint(room)) {
        room.painted = true
        }
        else room.painted = false
        return room.painted
};
Decorator.prototype.decreasePaintStock = function (room) {
    if (this.paintedTheRoom(room)) {
        
    }
}



module.exports = Decorator;
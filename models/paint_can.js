const PaintCan = function (litres) {
    this.litres = litres
};

PaintCan.prototype.checkIfEmpty = function () {
    if (this.litres > 0) {
        return false
    }
    return true
}

PaintCan.prototype.emptyAllPaint = function () {
    this.litres = 0
    return this.litres
}
module.exports = PaintCan;


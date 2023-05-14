const Room = function(area, painted) {
    this.area = area
    this.painted = painted
};

Room.prototype.checkIfPainted = function () {
    if (this.painted == true) {
        return true
    }
    return false
}

Room.prototype.isNowPainted = function () {
    this.painted = true
    return this.painted
}

module.exports = Room;
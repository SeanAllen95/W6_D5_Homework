const assert = require('assert');
const Decorator = require('../models/decorator.js');
const Room = require('../models/room.js');
const PaintCan = require('../models/paint_can.js');

describe('Room', function (){

    let room1

    beforeEach(function (){
        room1 = new Room(10, false)
    });

    it('should have an area in square meters', function () {
        const actual = room1.area
        assert.strictEqual(actual, 10)
    });

    it('should start not painted', function () {
        const actual = room1.checkIfPainted()
        assert.strictEqual(actual, false)


    });
    it('should be able to be painted', function () {
        const actual = room1.isNowPainted()
        assert.strictEqual(actual, true)
    });
});
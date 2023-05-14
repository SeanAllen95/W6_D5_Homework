const assert = require('assert');
const Decorator = require('../models/decorator.js');
const Room = require('../models/room.js');
const PaintCan = require('../models/paint_can.js');

describe('Decorator', function (){
    let decorator1
    let paintCan1
    let paintCan2
    let room1

    beforeEach(function () {
        decorator1 = new Decorator(0)
        paintCan1 = new PaintCan(1)
        paintCan2 = new PaintCan(2)
        room1 = new Room(10, false)
        room2 = new Room(5, false)
    });

    it('should start with an empty paint stock', function  () {
        const actual = decorator1.paintStock
        assert.deepStrictEqual(actual, [])
    });

    it('should be able to add a can of paint to paint stock', function () {
        decorator1.addPaintCan(paintCan1)
        const actual = decorator1.paintStock
        assert.deepStrictEqual(actual, [paintCan1])
    });

    it('should be able to calculate how many litres of paint it has in stock', function () {
        decorator1.addPaintCan(paintCan1)
        decorator1.addPaintCan(paintCan2)
        const actual = decorator1.countLitresOfPaint()
        assert.strictEqual(actual, 3)
    });

    it('should be able to calculate whether it has enough paint to paint a room', function () {
        decorator1.addPaintCan(paintCan2)
        decorator1.addPaintCan(paintCan2)
        decorator1.addPaintCan(paintCan2)
        decorator1.addPaintCan(paintCan2)
        decorator1.addPaintCan(paintCan2)
        const expected = true
        assert.strictEqual(decorator1.enoughToPaint(room1), expected)
    });
    it('should be able to paint room if it has enough paint in stock', function () {
        decorator1.addPaintCan(paintCan2)
        decorator1.addPaintCan(paintCan2)
        decorator1.addPaintCan(paintCan2)
        decorator1.addPaintCan(paintCan2)
        decorator1.addPaintCan(paintCan2)
        const actual = decorator1.paintedTheRoom(room1)
        assert.strictEqual(actual, true)
    });

});
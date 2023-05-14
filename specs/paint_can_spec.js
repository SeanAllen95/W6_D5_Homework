const assert = require('assert');
const Decorator = require('../models/decorator.js');
const Room = require('../models/room.js');
const PaintCan = require('../models/paint_can.js');

describe('PaintCan', function () {

    let paint1

    beforeEach(function () {
        paint1 = new PaintCan(2)
});

    it('should have a number of litres of paint', function () {
        const actual = paint1.litres
        assert.strictEqual(actual, 2)
    });

    it('should be able to check if it is empty', function (){
        const actual = paint1.checkIfEmpty()
        assert.strictEqual(actual, false)
    });

    it('should be able to empty itself of paint', function (){
        const actual = paint1.emptyAllPaint()
        assert.strictEqual(actual, 0)
    });
    
});
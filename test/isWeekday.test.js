const assert = require('assert');
const isWeekday = require('../isWeekday');

describe('isWeekday', function(){
    it('it should return true if given day is a weekday',function(){
        assert.equal(isWeekday('Monday'), true);
    });

    it('it should return false if given day is not a weekday',function(){
        assert.equal(isWeekday('Saturday'), false);
    });
});
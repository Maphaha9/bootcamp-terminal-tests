const assert = require('assert');
const isFromBellville = require('../isFromBellville');

describe('isFromBellville', function() {
    it('it should return false if given car is not from Bellville', function(){
        assert.equal(isFromBellville('CJ123'), false);
    });

    it('it should return true if given car is from Bellville', function(){
        assert.equal(isFromBellville('CY123'), true);
    });
});
const assert = require('assert');
const countRegNumber = require('../countRegNumber');

describe('countRegNumber', function(){
    it('Should return the number of registrations in a given string',function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });

    it('Should return the number of registrations in a given string',function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });
});
const assert = require('assert');
const countAllPaarl = require('../countAllPaarl');

describe('countAllPaarl', function(){
    it('Should return array with all paarl registration from given string',function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });

    it('Should return array with all paarl registration from given string',function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });
});
const assert = require('assert');
const yearsAgo = require('../yearsAgo');

describe('yearsAgo', function(){
    it('Return the number of years',function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });

    it('Return the number of years',function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
});
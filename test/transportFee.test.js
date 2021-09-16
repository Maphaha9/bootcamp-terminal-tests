const assert = require('assert');
const transportFee= require('../transportFee');

describe('transportFee', function(){
    it('it returns the right price based on the shift you are working',function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it('it returns the right price based on the shift you are working',function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('it returns the right price based on the shift you are working',function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});
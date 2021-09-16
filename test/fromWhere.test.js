const assert = require('assert');
const fromWhere = require('../fromWhere');

describe('fromWhere', function(){
    it('it takes a car registration number as a parameter and returns the town the car is from.',function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });

    it('it takes a car registration number as a parameter and returns the town the car is from.',function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });

    it('it takes a car registration number as a parameter and returns the town the car is from.',function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });

    it('it takes a car registration number as a parameter and returns the town the car is from.',function(){
        assert.equal(fromWhere('CC'), 'Some other place!');
    });
});
const assert = require('assert');
const greet = require('../greet');

describe('this test' , function(){
    it('should show you how to use MochaJS' , function(){
        assert.equal(2,2);

        assert.deepEqual([2,2],[2,2]);
    });

    it('should return "Hello, Khangwelo" when I greet Khangwelo', function(){
        assert.equal('Hello, Khangwelo', greet('Khangwelo'));

    });

    it('should return "Hello, Nicholus" when I greet Nicholus', function(){
        assert.equal('Hello, Nicholus', greet('Nicholus'));

    });

    it('should return "Hello" when no name is entered', function(){
        assert.equal('name', greet(''));

    });

});
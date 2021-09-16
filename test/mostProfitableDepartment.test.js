
const assert = require('assert');
const mostProfitableDepartment = require('../mostProfitableDepartment');


describe('mostProfitableDepartment', function(){
    it('to determine which of their departments are the most profitable',function(){
        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");
    });

    it('to determine which of their departments are the most profitable',function(){
        assert.equal('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");
    });
});
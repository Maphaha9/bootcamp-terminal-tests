const assert = require('assert');
const regCheck = require('../regCheck');

describe('regCheck', function(){
    it('it should return true if registration number matches given location',function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
        assert.equal(regCheck('5566 L', 'L'), true);
    });

    it('it should return false if registration number does not matches given location', function(){
        assert.equal(regCheck('5566 L', 'M'), false);
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);

    });
});
const assert = require('assert');
const Dio = require('../dio.js');

describe('Dio class', function() {
    it('Desafio 1', function() {
        const dio = new Dio();
        assert.equal(dio.desafio1(22, 67), 122.833);
    });
});
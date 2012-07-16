var should = require('should'),
	toNumber = require('../src/toNumber');

describe('toNumber', function(){
	it('should return a typeof Number from a money formatted string', function(){
		var actual = toNumber('R$ 123,45');
		actual.should.be.a('number');
	});
});
const expect = require('chai').expect;
const even   = require('../index');

describe('#firstOfArray', function() {
	it('should return a number', function() {
		const arr = [1,2,3,4,5];
		const result = even(arr);
		expect(result).to.be.a('number');
	});

	it('should return a string', function() {
		const arr = ['Ahad',2,3,4,5];
		const result = even(arr);
		expect(result).to.be.a('string');
	});

	it('should return the first element only', function() {
		const result = even([[1,2e10],2,3,4,5]);
		expect(result).to.not.equal(2);
	});

	it('can contain the largest possible integer', function() {
		const result = even([Number.POSITIVE_INFINITY,3,4,5]);
		expect(result).to.be.a('number');
	});

	it('returns undefined if empty array is param', function() {
		const result = even([]);
		expect(result).to.be.undefined;
	});
});
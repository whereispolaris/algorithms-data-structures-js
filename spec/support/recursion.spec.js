const factorial = require('../../recursion');

// unit test for bubbleSort Algorithm
describe('Recursion', function () {
	it('Should find the factorial of a number', () => {
		var x = 3;
		factorial(x);
		expect(factorial(x)).toEqual(6);
	});
});

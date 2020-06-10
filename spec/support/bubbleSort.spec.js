const bubbleSort = require('../../bubbleSort');

// unit test for bubbleSort Algorithm
describe('Bubble Sort Algorithm', function () {
	it('Should sort correctly', () => {
		var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
		bubbleSort(nums);
		expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});
	it('Should sort correctly', () => {
		var nums = [10, 5, 3, 2, 6, 4, 9, 1, 8, 7];
		bubbleSort(nums);
		expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});
});

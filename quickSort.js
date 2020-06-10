const quickSort = (nums) => {
	// Base case: Make sure there are numbers to sort
	if (nums.length <= 1) return nums;

	// find the pivot
	const pivot = nums[nums.length - 1];

	// create the smaller(left) and bigger(right) arrays
	const left = [];
	const right = [];

	// loop through all numbers except the last one ( nums.length - 1)
	for (let i = 0; i < nums.length - 1; i++) {
		// check if number is less than the pivot
		if (nums[i] < pivot) {
			left.push(nums[i]);
		} else {
			right.push(nums[i]);
		}
	}

	const sortedLeft = quickSort(left);
	const sortedRight = quickSort(right);

	return [...sortedLeft, pivot, ...sortedRight];
};

module.exports = quickSort;

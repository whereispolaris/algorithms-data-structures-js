const insertionSort = (nums) => {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] < nums[j]) {
				// Take out number to insert - 1 takes out the number
				const spliced = nums.splice(i, 1);
				// Insert the number right before - 0 is for insertion
				nums.splice(j, 0, spliced[0]);
			}
		}
	}
};

module.exports = insertionSort;

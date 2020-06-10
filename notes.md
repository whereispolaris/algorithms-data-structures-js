# Four Semesters of Computer Science in 5 Hours

### Important Concepts

**Big-O**

- It's the way we analyze how efficient an algorithm is.
- One for loop in an algorithm equals O(n), two for loops equals O(n^2)
- Algorithms with no loops and an instant return will be O(1). this is considered "constant time".
- O(log n) is applied for code that uses recursion, or a divide-and-conquer strategy. This is called Logarithmic running time.

**Recursion**

- In CS, recursion is a function that calls itself.
- Useful because each level of the recusive call maintains its own state.
- It can become expensive when too many calls are made.

Example:

```
// Recursion in the form of a factorial function Example: The factorial of 4 is 4 * 3 * 2 * 1, or 24.

function factorial(x) {
	if (x < 0) return;
	if (x === 0) return 1;
	return x * factorial(x - 1);
}
console.log(factorial(4)); // 24
```

- To prevent stack overflow, the very first line in the function should define when the function should stop recursing.

### Resources

- Course Website: http://btholt.github.io/four-semesters-of-cs/
- Cormen's Introduction to Algorithms: https://mitpress.ublish.com/ereader/1/?preview#page/1
- Big-O Cheat Sheet: https://www.bigocheatsheet.com/

### Unit Testing

Tests are done using Jasmine and are located in the ./spec/ directory and can be exectuted with `npm test`

[Quick Jasmine Unit Testing Tutorial](https://www.youtube.com/watch?v=aBYwNqiWYmU)

---

### Sorting Algorithms

**Bubble Sort**

This algorithm is extremely inefficient and it's mainly used to conceptualize sorting. It's a good place to start when trying to understand more complex algorithms.

Compare two adjacent numbers at a time and swaps them if they are out of order. It consists of two loops.

- Outer loop contiues running as log as there are number swapper in the previous iteration.

- Inner loop swaps numbers if they are out of order.

Note: This is one of the only cases where a do while loop is approppriate.

Example:

```
const bubbleSort = (nums) => {
	let swapped = false;
	do {
		swapped = false;
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] > nums[i + 1]) {
				const temp = nums[i];
				nums[i] = nums[i + 1];
				nums[i + 1] = temp;
				swapped = true;
			}
		}
		console.log(nums);
	} while (swapped);
	console.log(nums);
};

bubbleSort([4, 6, 2, 7, 9]);
```

**Insertion Sort**

ADD NOTES NEXT TIME

**Merge Sort**

High level explanation: You take a big list that you split down the middle and continue to divide that half by two until you get to one, then you move upwards and start putting the items back togethen in order.

MergeSort's Big O is O(n log n) - We have to compare everything once, but we don't have to compare everything with everything (like buble sort)

The space complexity of MergeSort is a bit worse than the previous algrithms at O(n) due to the number of lists that have to be created during the sorting.

Quick facts

- Divide and Conquer Algo
- Algorithm - arrary.sort() uses merge sort - FF uses Quick sort
- Very consistent and dependable
- It's going to use recursion
- Stable sort - IF you have equivalent elements, it will keep their original order in the array.

Unit Test:

```
// unit tests
// do not modify the below code
describe('insertion sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    var ans = mergeSort(nums);
    expect(ans).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});
```

Code

```

const mergeSort = nums => {
  if (nums.length < 2) {
    return nums;
  }
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {

  const results = [];

  while (left.length && right.length) {

    if (left[0] <= right[0]) {
      results.push(left.shift());
    }
    else {
      results.push(right.shift());
    }
  }

  return results.concat(left, right);
};

```

**Median Values**

Find the middle element in an array

[1,5,8,9]

[2,3,7,10]

For this example you can use the Stich algorithm.

**Quick Sort**

This algorithm uses a number called 'pivot' to divide the list into two arrays —— left and right arrays. It then calls itself again, and continues to divide the arrays until there is one or none. At the end, it returns the left array, the pivot, and the right array respectively.

Quick Facts

- Another divide and conquer array
- Uses the last number as the pivot
- Not very efficient if the list is already sorted.
- Uses recursion
- Big O is O(n log n) unless the list is sorted. It becomes O(n^2) for sorted lists
- Quick Sort 3 mitigates the sorted list problem by choosing the middle item in the list instead of the last one.

### Data Structure Interfaces

**Set**

- Set is not an array —— More of an object instead
- It is not an ordered list, so it have indexes associated with each items.
- Cannot add duplicates to itself
- EXPLAIN THIS MORE

**Map**

Maps are sets of keys that have values associated with the keys.

- Put simply, they are key value pairs
- They do not have prototypes, methods, or inheritance
- Similar to JS objects
- Simlilar to associative arrays
- Cannot have diplicate keys

**Stack**

- Stacks follow the "Last-In First-Out" (LIFO) method
- Whatever is put in (push) last is what you can take out (pop)
- The pop method is destructive
- You can also use peek to look at the last item before removing it (peek)
- Arrays have a stack interface but they are not stacks because they do not strictly follow the LIFO method.

For instance, take this snippet of code:

```
function double(x) { return 2 * x; }
function squareAndAddFive(y) { return square(y) + 5; }
function square(z) { return z * z; }

function maths(num) {
    var answer = double(num);
    answer = squareAndAddFive(answer);
    return answer;
}

maths(5);
```

**Queue**

- Queues follow the "First-In First-Out" (FIFO) method
- Queues are useful for networking
- It's useful to dictate the order in which requests or packets are requested and served
- Queues also have priorities for certain requests that are more important than others

### Use Cases For Data Structures

**Array List**

- Array List (JS) and LinkedList(Java) are two representations of arrays.
- As JavaScript is a garbage-collected language, you don't have to worry about allocating memory. It unlike Java, does this under the hood by default.

Take for instance, this array of musical scales

[do,re,mi,fa,so,la,ti,do]
0 1 2 3 4 5 5 7

The index is the unique identifier and agruably the most important part of an array. Without the index, this would pretty much become the above mentioned _Set_.

For memory, this becomes a problem when you delete or insert something in the array, as all the items have to shift and have a new index.

```
Code For ArrayList
```

**LinkedList**

- GOOGLE IT
- Consists of Nodes
- Have a head and a tail
- Gets are expensive
- Deletes are cheap
- Big O of get and delete

```
Code For LinkedList
```

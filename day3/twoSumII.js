/**167. Two Sum II - Input Array Is Sorted
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

 */

// Using two pointers
var twoSum = function (numbers, target) {
  let l = 0,
    r = numbers.length - 1;

  while (l < r) {
    let sum = numbers[l] + numbers[r];

    if (sum === target) {
      return [l + 1, r + 1];
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
};

// Another approach using binary search
var twoSum2 = function (numbers, target) {
  const search = (arr, left, right, target) => {
    const mid = Math.floor((left + right) / 2);
    if (left > right) {
      return -1;
    }

    if (arr[mid] == target) {
      return mid;
    }

    if (arr[mid] > target) {
      return search(arr, left, mid - 1, target);
    } else {
      return search(arr, mid + 1, right, target);
    }
  };

  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i];
    const j = search(numbers, i + 1, numbers.length - 1, diff);
    if (j !== -1) {
      return [i + 1, j + 1];
    }
  }
};

console.log(twoSum2([2, 7, 11, 15], 9)); // [1,2]

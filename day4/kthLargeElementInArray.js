/**215. Kth Largest Element in an Array
 * Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

 

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => a - b);

//   let count = 1;

//   let prev = nums[nums.length - 1];

//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (count === k) {
//       return prev;
//     }

//     if (prev !== nums[i]) {
//       count++;
//       prev = nums[i];
//     }
//   }

//   return prev;

    return nums[nums.length - k];
};

console.log(findKthLargest([3, 2, 1, 5, 6,6, 4], 2)); // 5

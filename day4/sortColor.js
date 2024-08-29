/**75. Sort Colors
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]

 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function (nums) {
//   let low = 0;
//   let high = nums.length - 1;
//   let i = 0;

//   while (i <= high) {
//     if (nums[i] === 0) {
//       [nums[i], nums[low]] = [nums[low], nums[i]];
//       low++;
//       i++;
//     } else if (nums[i] === 2) {
//       [nums[i], nums[high]] = [nums[high], nums[i]];
//       high--;
//     } else {
//       i++;
//     }
//   }
// };

//ussing merge sort
var sortColors = function (nums) {
  const merge = (nums, low, mid, high) => {
    let i = low;
    let j = mid + 1;
    let k = low;
    let temp = Array(nums.length);

    while (i <= mid && j <= high) {
      if (nums[i] < nums[j]) {
        temp[k++] = nums[i++];
      } else {
        temp[k++] = nums[j++];
      }
    }

    while (i <= mid) {
      temp[k++] = nums[i++];
    }

    while (j <= high) {
      temp[k++] = nums[j++];
    }

    for (let i = low; i <= high; i++) {
      nums[i] = temp[i];
    }
  };

  const mergeSort = (nums, low, high) => {
    if (low < high) {
      let mid = Math.floor((low + high) / 2);
      mergeSort(nums, low, mid);
      mergeSort(nums, mid + 1, high);
      merge(nums, low, mid, high);
    }
  };

  mergeSort(nums, 0, nums.length - 1);

  console.log(nums);
};

console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0,0,1,1,2,2]

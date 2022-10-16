// Two Sum
// Easy
// Topis - Array and Hashmap

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 10^4
// -10^9 <= nums[i] <= 10^9
// -10^9 <= target <= 10^9
// Only one valid answer exists.

// *************** Solution ****************
// The idea here is iterate over the array, keep storing index of elements in hash map.
// if the substraction of target and current num already exist in map, then return the indexes of both
// TC - O(N)
// SC - O(N)

function solve(A, t) {
  let map = {};
  for (let i = 0; i < A.length; i++) {
    const num = A[i];
    let sub = t - num;
    if (map[sub] !== undefined) return [map[sub], i];
    map[num] = i;
  }
  return -1
}

// const nums = [2, 7, 11, 15];
// const target = 9;

const nums = [3, 3];
const target = 6;

console.log(solve(nums, target))

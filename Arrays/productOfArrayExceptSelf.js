// Product of Array Except Self
// Medium

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

// This problem is tricky since in the ideal solution they don't want to apply division, since division is an expensive operation

// The below solution implements this using division and hence slower than the solution which has only multiplication operation
// TC - O(N)
// SC - O(1)
function solve(A) {
  let product = 1;
  let has0 = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] == 0) {
      has0++;
    } else {
      product *= A[i];
    }
  }
  for (let i = 0; i < A.length; i++) {
    if (has0 > 1) {
      A[i] = 0;
    } else if (has0 == 1) {
      if (A[i] == 0) {
        A[i] = product;
      } else {
        A[i] = 0;
      }
    } else {
      A[i] = product / A[i];
    }
  }
  return A;
}

// TC  - O(N)
// SC - O(N)
function solveOptimised(A) {
  let leftArr = new Array(A.length).fill(1);
  leftArr[0] = 1;
  for (let i = 1; i < A.length; i++) {
    leftArr[i] *= leftArr[i - 1] * A[i - 1];
  }
  let product = 1;
  for (let i = A.length - 1; i >= 0; i--) {
    leftArr[i] *= product;
    product *= A[i];
  }
  return leftArr
}

const nums = [1, 2, 3, 4];
// const nums = [-1, 1, 0, -3, 3];
// const nums = [0, 0];
// console.log(solve(nums));
console.log(solveOptimised(nums));

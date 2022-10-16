// Longest Consecutive Sequence
// Medium

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:

// 0 <= nums.length <= 10^5
// -109 <= nums[i] <= 10^9

// Below is the most efficient solution for this question
// TC - O(N)
// SC - O(N)
// Other ways to solve this question?
// Brute force - O(N^3), SC - O(1)
// Sort the elements - TC - O(NlogN), SC - O(1)
function solve(A) {
  let map = {};
  for (let i = 0; i < A.length; i++) {
    map[A[i]] = i;
  }
  let max = 1;
  for (let i = 0; i < A.length; i++) {
    const num = A[i];
    const minus1 = A[i] - 1;
    if (map[minus1]) continue;
    else {
      let numplus1 = num + 1;
      let count = 1;
      let numPlus1Val = map[numplus1];
    //   This loop will only run for numbers which doesnt hv one smaller number present for them in the array
      while (numPlus1Val !== undefined) {
        count++;
        numplus1++;
        numPlus1Val = map[numplus1];
      }
      max = Math.max(count, max);
    }
  }
  return max;
}

const nums = [100, 4, 200, 1, 3, 2];
// const nums = [0,3,7,2,5,8,4,6,0,1]

console.log(solve(nums));

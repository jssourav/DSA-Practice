/**
 * ### 5. Two Sum

    **Description:** Given an array of integers, return indices of the two numbers such that they add up to a specific target.

    - **Input:** `([2, 7, 11, 15], 9)`
    - **Output:** `[0, 1]` (because `nums[0] + nums[1] = 2 + 7 = 9`)

    **Edge Cases:**

    - Input: `([1, 2, 3], 6)`
    - Output: `[]` (no solution)
    - Input: `([3, 3], 6)`
    - Output: `[0, 1]`
 */

function twoSum(nums, target) {
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numObj[complement] !== undefined) {
      return [numObj[complement], i];
    }
    numObj[nums[i]] = i;
  }
}

console.log(twoSum([1, 3, 10, 11, 14], 13));

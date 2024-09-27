/**
 * **Description:** Given an array containing `n` distinct numbers in the range `[0, n]`, find the one number that is missing.

    - **Input:** `[3, 0, 1]`
    - **Output:** `2`

    **Edge Cases:**

    - Input: `[0]`
    - Output: `1`
    - Input: `[0, 1]`
    - Output: `2`
 */

const findMissingNumber = (arr) => {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr[i]) return i;
  }
  return "No number is missing";
};

console.log(findMissingNumber([3, 0, 1]));

function missingNumber(nums) {
  let n = nums.length;
  // Calculate the expected sum of numbers from 0 to n
  let expectedSum = (n * (n + 1)) / 2;

  // Calculate the actual sum of the given array
  let actualSum = nums.reduce((acc, num) => acc + num, 0);

  // The missing number is the difference between expectedSum and actualSum
  return expectedSum - actualSum;
}

// Example Usage:
console.log(missingNumber([3, 0, 1])); // Output: 2
console.log(missingNumber([0])); // Output: 1
console.log(missingNumber([0, 1])); // Output: 2

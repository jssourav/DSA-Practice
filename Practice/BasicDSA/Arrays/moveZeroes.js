/**
 * ### 6. Move Zeroes

    **Description:** Move all zeroes to the end while maintaining the relative order of the non-zero elements.

    - **Input:** `[0, 1, 0, 3, 12]`
    - **Output:** `[1, 3, 12, 0, 0]`

    **Edge Cases:**

    - Input: `[]`
    - Output: `[]`
    - Input: `[1, 2, 3]`
    - Output: `[1, 2, 3]`
 */

const moveZeroes = (arr) => {
  if (!Array.isArray(arr)) return "Not an Array";
  if (arr.length === 0) return [];
  const zeroes = arr.filter((item) => item === 0);
  const numbers = arr.filter((item) => item > 0);

  numbers.sort((a, b) => a - b);

  return [...numbers, ...zeroes];
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

// function moveZeroes(nums) {
//   let lastNonZeroFoundAt = 0; // Pointer for the last non-zero element

//   // Move non-zero elements to the front
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[lastNonZeroFoundAt] = nums[i];
//       lastNonZeroFoundAt++;
//     }
//   }

//   // Fill the remaining positions with zeroes
//   for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
//     nums[i] = 0;
//   }

//   return nums; // The modified array
// }

// // Example usage:
// console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
// console.log(moveZeroes([])); // Output: []
// console.log(moveZeroes([1, 2, 3])); // Output: [1, 2, 3]

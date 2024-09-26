/**
 * ### 4. Rotate an Array

    **Description:** Rotate an array to the right by `k` steps.

    - **Input:** `([1, 2, 3, 4, 5], 2)`
    - **Output:** `[4, 5, 1, 2, 3]`

    **Edge Cases:**

    - Input: `([1, 2, 3], 0)`
    - Output: `[1, 2, 3]`
    - Input: `([1, 2, 3], 3)`
    - Output: `[1, 2, 3]`
    - Input: `([], 1)`
    - Output: `[]`
 */

const rotate = (arr, steps) => {
  const n = arr.length;
  if (n === 0 || steps % n === 0) return arr;

  const actualSteps = steps % n; // Normalize steps
  const newArr = [];

  // Get the elements to be rotated
  for (let i = n - actualSteps; i < n; i++) {
    newArr.push(arr[i]);
  }
  // Add the remaining elements
  return [...newArr, ...arr.slice(0, n - actualSteps)];
};

// Example usage:
console.log(rotate([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
console.log(rotate([1, 2, 3], 0)); // Output: [1, 2, 3]
console.log(rotate([1, 2, 3], 3)); // Output: [1, 2, 3]
console.log(rotate([], 1)); // Output: []

/**
 * ### 2. Find the Maximum and Minimum

    **Description:** Given an array of numbers, find the maximum and minimum values.

    - **Input:** `[3, 5, 1, 8, 2]`
    - **Output:** `Max: 8, Min: 1`

    **Edge Cases:**

    - Input: `[5]`
    - Output: `Max: 5, Min: 5`
    - Input: `[]`
    - Output: `Max: None, Min: None` (handle with a message)
 */

const findMinMax = (arr) => {
  if (!Array.isArray(arr)) return "Not an Array";
  if (arr.length === 0) return `Max: None, Min: None (Empty Array)`;
  let minValue = Infinity;
  let maxValue = -Infinity;

  for (let item of arr) {
    // Find minimum value
    if (item < minValue) minValue = item;

    // Find maximum value
    if (item > maxValue) maxValue = item;
  }
  return `Max: ${maxValue}, Min: ${minValue}`;
};

const output = findMinMax([3, 5, 1, 8, 2]);
console.log(output);

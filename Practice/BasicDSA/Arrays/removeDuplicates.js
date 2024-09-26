/**
 * ### 3. Remove Duplicates

    **Description:** Implement a function that removes duplicates from an array.

    - **Input:** `[1, 2, 2, 3, 4, 4]`
    - **Output:** `[1, 2, 3, 4]`

    **Edge Cases:**

    - Input: `[]`
    - Output: `[]`
    - Input: `[1, 1, 1]`
    - Output: `[1]`
 */

// Using filter
const removeDuplicatesUsingFilter = (arr) => {
  if (!Array.isArray(arr)) return "Not an Array";
  if (arr.length === 0) return [];

  return arr.filter((item, index) => arr.indexOf(item) === index);
};

console.log(removeDuplicatesUsingFilter([1, 2, 2, 3, 4, 4, 1]));

// Using reduce
const removeDuplicatesUsingReduce = (arr) => {
  if (!Array.isArray(arr)) return "Not an Array";
  if (arr.length === 0) return [];

  return arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
};

console.log(removeDuplicatesUsingReduce([1, 2, 2, 3, 4, 4, 1]));

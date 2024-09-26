/**
 * 
 * ### 1. Reverse an Array

    **Description:** Write a function to reverse an array in place.

    - **Input:** `[1, 2, 3, 4, 5]`
    - **Output:** `[5, 4, 3, 2, 1]`

    **Edge Cases:**

    - Input: `[]`
    - Output: `[]`
    - Input: `[1]`
    - Output: `[1]`
 */

const reverseArray = (arr) => {
    if (!Array.isArray(arr)) return "Not an Array"
    if (arr.length === 0) return [];
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);         
    }
    return newArr;
}

const reversedArray = reverseArray([1, 2, 3, 4, 5]);

console.log(reversedArray);
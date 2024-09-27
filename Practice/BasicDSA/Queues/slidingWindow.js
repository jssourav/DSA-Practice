/**
 * ### 6. Sliding Window Maximum

    **Description:** Given an array and a sliding window size `k`, find the maximum value in each sliding window.

    - **Input:** `array = [1, 3, -1, -3, 5, 3, 6, 7], k = 3`
    - **Output:** `[3, 3, 5, 5, 6, 7]`
 */

function slidingWindowMaximum(nums, k) {
  if (!nums || k === 0) return [];

  const deq = []; // Deque to store indices
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove indices of elements not in the current window
    if (deq.length && deq[0] < i - k + 1) {
      deq.shift(); // Remove from the front of the deque
    }

    // Remove elements from the back of the deque that are smaller than the current element
    while (deq.length && nums[deq[deq.length - 1]] < nums[i]) {
      deq.pop(); // Remove from the back of the deque
    }

    // Add the current element's index to the deque
    deq.push(i);

    // Start recording results from when the first window is fully formed
    if (i >= k - 1) {
      result.push(nums[deq[0]]); // The front of the deque is the max element
    }
  }

  return result;
}

// Test the function with the given input
const array = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
const output = slidingWindowMaximum(array, k);
console.log(output); // Output: [3, 3, 5, 5, 6, 7]

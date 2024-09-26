# Queue Questions for DSA Practice

## Queue Questions

### 1. Implement a Queue using Arrays

**Description:** Implement a queue using an array with enqueue, dequeue, and peek operations.

- **Input:**
  - Enqueue: `enqueue(1)`
  - Enqueue: `enqueue(2)`
  - Dequeue: `dequeue()`
- **Output:** `1`

**Edge Cases:**

- Input: `dequeue()` on an empty queue
  - Output: `null` or an appropriate message

---

### 2. Implement a Queue using Linked List

**Description:** Implement a queue using a linked list with enqueue, dequeue, and peek operations.

- **Input:**
  - Enqueue: `enqueue(1)`
  - Enqueue: `enqueue(2)`
  - Dequeue: `dequeue()`
- **Output:** `1`

**Edge Cases:**

- Input: `dequeue()` on an empty queue
  - Output: `null` or an appropriate message

---

### 3. Implement a Circular Queue

**Description:** Implement a circular queue with fixed size, allowing enqueue and dequeue operations.

- **Input:**
  - Enqueue: `enqueue(1)`
  - Enqueue: `enqueue(2)`
  - Dequeue: `dequeue()`
- **Output:** `1`

**Edge Cases:**

- Input: Enqueue when the queue is full
  - Output: `Queue is full` message

---

### 4. Generate Binary Numbers

**Description:** Generate binary numbers from `1` to `n` using a queue.

- **Input:** `n = 3`
- **Output:** `1, 10, 11`

**Edge Cases:**

- Input: `n = 0`
  - Output: `[]`
- Input: `n = 1`
  - Output: `1`

---

### 5. First Non-Repeating Character in a Stream

**Description:** Given a stream of characters, find the first non-repeating character for each character added.

- **Input:** `stream = "aabc"`
- **Output:** `a, a, b, b`

**Edge Cases:**

- Input: `stream = "aa"`
  - Output: `a, a`
- Input: `stream = ""`
  - Output: `[]`

---

### 6. Sliding Window Maximum

**Description:** Given an array and a sliding window size `k`, find the maximum value in each sliding window.

- **Input:** `array = [1, 3, -1, -3, 5, 3, 6, 7], k = 3`
- **Output:** `[3, 3, 5, 5, 6, 7]`

**Edge Cases:**

- Input: `array = [1], k = 1`
  - Output: `[1]`
- Input: `array = [], k = 0`
  - Output: `[]`

---

### 7. Queue Reconstruction by Height

**Description:** You are given an array of people, where each person is represented by a pair of integers `[h, k]`. `h` is the height of the person and `k` is the number of people in front of this person who have a height greater than or equal to `h`. Reconstruct and return the queue.

- **Input:** `[[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]`
- **Output:** `[[5, 0], [6, 1], [4, 4], [7, 0], [7, 1]]`

**Edge Cases:**

- Input: `[[1, 0]]`
  - Output: `[[1, 0]]`
- Input: `[]`
  - Output: `[]`

---

### 8. Binary Tree Level Order Traversal

**Description:** Given a binary tree, return the level order traversal of its nodes' values.

- **Input:**
  3
  / \
  9 20
  / \
   15 7

  - **Output:** `[[3], [9, 20], [15, 7]]`

**Edge Cases:**

- Input: `null`
- Output: `[]`
- Input: A tree with one node
- Output: `[[value]]`

---

### 9. Implement Stack using Queues

**Description:** Implement a stack using two queues.

- **Input:**
- Push: `push(1)`
- Push: `push(2)`
- Pop: `pop()`
- **Output:** `2`

**Edge Cases:**

- Input: `pop()` on an empty stack
- Output: `null` or an appropriate message

---

### 10. Implement Queue using Stacks

**Description:** Implement a queue using two stacks.

- **Input:**
- Enqueue: `enqueue(1)`
- Enqueue: `enqueue(2)`
- Dequeue: `dequeue()`
- **Output:** `1`

**Edge Cases:**

- Input: `dequeue()` on an empty queue
- Output: `null` or an appropriate message

---

## Additional Resources

You can practice these questions on platforms like:

- [LeetCode](https://leetcode.com)
- [HackerRank](https://www.hackerrank.com)
- [CodeSignal](https://codesignal.com)

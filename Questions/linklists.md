# Linked List Questions for DSA Practice

## Linked List Questions

### 1. Reverse a Linked List

**Description:** Write a function to reverse a linked list.

- **Input:** `1 -> 2 -> 3 -> 4 -> 5`
- **Output:** `5 -> 4 -> 3 -> 2 -> 1`

**Edge Cases:**

- Input: `1`
  - Output: `1`
- Input: `null`
  - Output: `null`

---

### 2. Detect a Cycle

**Description:** Determine if a linked list has a cycle in it.

- **Input:** `1 -> 2 -> 3 -> 4 -> 5 -> 2` (cycle starts at 2)
- **Output:** `true`

**Edge Cases:**

- Input: `1 -> 2 -> 3 -> null`
  - Output: `false`
- Input: `1 -> 1` (cycle at single node)
  - Output: `true`

---

### 3. Find the Middle of a Linked List

**Description:** Find the middle node of a linked list.

- **Input:** `1 -> 2 -> 3 -> 4 -> 5`
- **Output:** `3`

**Edge Cases:**

- Input: `1 -> 2`
  - Output: `2`
- Input: `1`
  - Output: `1`

---

### 4. Merge Two Sorted Linked Lists

**Description:** Merge two sorted linked lists into one sorted list.

- **Input:** `1 -> 2 -> 4`, `1 -> 3 -> 4`
- **Output:** `1 -> 1 -> 2 -> 3 -> 4 -> 4`

**Edge Cases:**

- Input: `null`, `1 -> 2`
  - Output: `1 -> 2`
- Input: `1 -> 2`, `null`
  - Output: `1 -> 2`

---

### 5. Remove N-th Node from End of List

**Description:** Remove the n-th node from the end of the list and return its head.

- **Input:** `1 -> 2 -> 3 -> 4 -> 5`, `n = 2`
- **Output:** `1 -> 2 -> 3 -> 5`

**Edge Cases:**

- Input: `1`, `n = 1`
  - Output: `null`
- Input: `1 -> 2`, `n = 1`
  - Output: `1`

---

### 6. Palindrome Linked List

**Description:** Determine if a linked list is a palindrome.

- **Input:** `1 -> 2 -> 2 -> 1`
- **Output:** `true`

**Edge Cases:**

- Input: `1 -> 2`
  - Output: `false`
- Input: `1`
  - Output: `true`

---

### 7. Remove Duplicates from Sorted List

**Description:** Remove duplicates from a sorted linked list.

- **Input:** `1 -> 1 -> 2`
- **Output:** `1 -> 2`

**Edge Cases:**

- Input: `1 -> 1 -> 1`
  - Output: `1`
- Input: `null`
  - Output: `null`

---

### 8. Intersection of Two Linked Lists

**Description:** Determine the node where two linked lists intersect.

- **Input:**
  List A: 1 -> 2 -> 3
  6 -> 7 / List B: 4 -> 5

- **Output:** `6`

**Edge Cases:**

- Input: No intersection
- Output: `null`
- Input: Both lists are `null`
- Output: `null`

---

### 9. Flatten a Multilevel Doubly Linked List

**Description:** Flatten a multilevel doubly linked list.

- **Input:**
  1 <-> 2 <-> 3 | 7 <-> 8

- **Output:** `1 <-> 2 <-> 3 <-> 7 <-> 8`

**Edge Cases:**

- Input: Only head node
- Output: `head`
- Input: Empty list
- Output: `null`

---

### 10. Copy List with Random Pointer

**Description:** A linked list where each node has an additional random pointer which could point to any node in the list or null. Clone the list.

- **Input:**
  1 -> 2 -> 3 | | | v v v 3 1 null

- **Output:** A deep copy of the original list.

**Edge Cases:**

- Input: Only head node
- Output: A new node with the same value
- Input: Empty list
- Output: `null`

---

## Additional Resources

You can practice these questions on platforms like:

- [LeetCode](https://leetcode.com)
- [HackerRank](https://www.hackerrank.com)
- [CodeSignal](https://codesignal.com)

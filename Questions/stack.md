# Stack Questions for DSA Practice

## Stack Questions

### 1. Implement a Stack using Arrays

**Description:** Implement a stack using an array with push, pop, and peek operations.

- **Input:**
  - Push: `push(1)`
  - Push: `push(2)`
  - Pop: `pop()`
- **Output:** `2`

**Edge Cases:**

- Input: `pop()` on an empty stack
  - Output: `null` or an appropriate message

---

### 2. Implement a Stack using Linked List

**Description:** Implement a stack using a linked list with push, pop, and peek operations.

- **Input:**
  - Push: `push(1)`
  - Push: `push(2)`
  - Pop: `pop()`
- **Output:** `2`

**Edge Cases:**

- Input: `pop()` on an empty stack
  - Output: `null` or an appropriate message

---

### 3. Valid Parentheses

**Description:** Given a string containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, determine if the input string is valid.

- **Input:** `"()[]{}"`
- **Output:** `true`

**Edge Cases:**

- Input: `"(]"`
  - Output: `false`
- Input: `""`
  - Output: `true`

---

### 4. Evaluate Reverse Polish Notation

**Description:** Evaluate the value of an expression in Reverse Polish Notation (RPN).

- **Input:** `["2", "1", "+", "3", "*"]`
- **Output:** `9`

**Edge Cases:**

- Input: `["4", "13", "5", "/", "+"]`
  - Output: `6`
- Input: `[]`
  - Output: `0`

---

### 5. Min Stack

**Description:** Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

- **Input:**
  - Push: `push(-2)`
  - Push: `push(0)`
  - Push: `push(-3)`
  - Get Min: `getMin()`
- **Output:** `-3`

**Edge Cases:**

- Input: `pop()` when only one element is present
  - Output: Appropriate behavior to maintain stack properties

---

### 6. Daily Temperature

**Description:** Given a list of daily temperatures, return a list such that each element is the number of days you have to wait until a warmer temperature.

- **Input:** `[73, 74, 75, 71, 69, 72, 76, 73]`
- **Output:** `[1, 1, 4, 2, 1, 1, 0, 0]`

**Edge Cases:**

- Input: `[]`
  - Output: `[]`
- Input: `[30, 40, 50, 60]`
  - Output: `[1, 1, 1, 0]`

---

### 7. Largest Rectangle in Histogram

**Description:** Given an array representing the heights of bars in a histogram, find the area of the largest rectangle that can be formed.

- **Input:** `[2, 1, 5, 6, 2, 3]`
- **Output:** `10`

**Edge Cases:**

- Input: `[]`
  - Output: `0`
- Input: `[1]`
  - Output: `1`

---

### 8. Sort a Stack

**Description:** Sort a stack in ascending order (largest on top). You may use an additional temporary stack.

- **Input:**
  - Stack: `3, 2, 1`
- **Output:** `1, 2, 3`

**Edge Cases:**

- Input: `[]`
  - Output: `[]`
- Input: `[1]`
  - Output: `[1]`

---

### 9. Next Greater Element

**Description:** Given an array, find the next greater element for each element.

- **Input:** `[4, 5, 2, 10]`
- **Output:** `[5, 10, 10, -1]`

**Edge Cases:**

- Input: `[]`
  - Output: `[]`
- Input: `[1]`
  - Output: `[-1]`

---

### 10. Check for Balanced Brackets

**Description:** Given a string containing different types of brackets, determine if the brackets are balanced.

- **Input:** `"{[()]}"`
- **Output:** `true`

**Edge Cases:**

- Input: `"{[()]}]"`
  - Output: `false`
- Input: `""`
  - Output: `true`

---

## Additional Resources

You can practice these questions on platforms like:

- [LeetCode](https://leetcode.com)
- [HackerRank](https://www.hackerrank.com)
- [CodeSignal](https://codesignal.com)

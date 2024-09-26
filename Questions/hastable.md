# Hash Table Questions for DSA Practice

## Hash Table Questions

### 1. Two Sum

**Description:** Given an array of integers, return indices of the two numbers such that they add up to a specific target.

- **Input:** `nums = [2, 7, 11, 15], target = 9`
- **Output:** `[0, 1]`

**Edge Cases:**

- Input: `nums = [3, 2, 4], target = 6`
  - Output: `[1, 2]`
- Input: `nums = [1, 1, 1], target = 2`
  - Output: `[0, 1]`

---

### 2. Valid Anagram

**Description:** Given two strings, determine if they are anagrams of each other.

- **Input:** `s = "anagram", t = "nagaram"`
- **Output:** `true`

**Edge Cases:**

- Input: `s = "rat", t = "car"`
  - Output: `false`
- Input: `s = "", t = ""`
  - Output: `true`

---

### 3. Group Anagrams

**Description:** Given an array of strings, group the anagrams together.

- **Input:** `strs = ["eat", "tea", "tan", "ate", "nat", "bat"]`
- **Output:** `[["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]`

**Edge Cases:**

- Input: `strs = [""]`
  - Output: `[[""]]`
- Input: `strs = ["a"]`
  - Output: `[["a"]]`

---

### 4. First Unique Character in a String

**Description:** Given a string, find the first non-repeating character in it and return its index.

- **Input:** `s = "leetcode"`
- **Output:** `0`

**Edge Cases:**

- Input: `s = "loveleetcode"`
  - Output: `2`
- Input: `s = "aabb"`
  - Output: `-1`

---

### 5. Longest Consecutive Sequence

**Description:** Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

- **Input:** `nums = [100, 4, 200, 1, 3, 2]`
- **Output:** `4` (the longest sequence is `[1, 2, 3, 4]`)

**Edge Cases:**

- Input: `nums = []`
  - Output: `0`
- Input: `nums = [1]`
  - Output: `1`

---

### 6. Contains Duplicate

**Description:** Given an integer array, return `true` if any value appears at least twice in the array.

- **Input:** `nums = [1, 2, 3, 1]`
- **Output:** `true`

**Edge Cases:**

- Input: `nums = [1, 2, 3, 4]`
  - Output: `false`
- Input: `nums = [1, 1, 1]`
  - Output: `true`

---

### 7. Intersection of Two Arrays

**Description:** Given two arrays, write a function to compute their intersection.

- **Input:** `nums1 = [1, 2, 2, 1], nums2 = [2, 2]`
- **Output:** `[2]`

**Edge Cases:**

- Input: `nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]`
  - Output: `[4, 9]`
- Input: `nums1 = [], nums2 = []`
  - Output: `[]`

---

### 8. Two Sum II - Input Array Is Sorted

**Description:** Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

- **Input:** `numbers = [2, 7, 11, 15], target = 9`
- **Output:** `[1, 2]` (the indices are 1-based)

**Edge Cases:**

- Input: `numbers = [1, 2, 3, 4, 4, 9, 10], target = 8`
  - Output: `[4, 5]`
- Input: `numbers = [2, 3, 4], target = 6`
  - Output: `[1, 2]`

---

### 9. Subarray Sum Equals K

**Description:** Given an array of integers and an integer `k`, return the total number of continuous subarrays whose sum equals to `k`.

- **Input:** `nums = [1, 1, 1], k = 2`
- **Output:** `2`

**Edge Cases:**

- Input: `nums = [1, 2, 3], k = 3`
  - Output: `2`
- Input: `nums = [], k = 0`
  - Output: `0`

---

### 10. Happy Number

**Description:** Write an algorithm to determine if a number n is "happy".

- **Input:** `n = 19`
- **Output:** `true`

**Edge Cases:**

- Input: `n = 2`
  - Output: `false`
- Input: `n = 1`
  - Output: `true`

---

## Additional Resources

You can practice these questions on platforms like:

- [LeetCode](https://leetcode.com)
- [HackerRank](https://www.hackerrank.com)
- [CodeSignal](https://codesignal.com)

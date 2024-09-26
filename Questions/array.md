# Array and String Questions for DSA Practice

## Array Questions

### 1. Reverse an Array

**Description:** Write a function to reverse an array in place.

- **Input:** `[1, 2, 3, 4, 5]`
- **Output:** `[5, 4, 3, 2, 1]`

**Edge Cases:**

- Input: `[]`
  - Output: `[]`
- Input: `[1]`
  - Output: `[1]`

---

### 2. Find the Maximum and Minimum

**Description:** Given an array of numbers, find the maximum and minimum values.

- **Input:** `[3, 5, 1, 8, 2]`
- **Output:** `Max: 8, Min: 1`

**Edge Cases:**

- Input: `[5]`
  - Output: `Max: 5, Min: 5`
- Input: `[]`
  - Output: `Max: None, Min: None` (handle with a message)

---

### 3. Remove Duplicates

**Description:** Implement a function that removes duplicates from an array.

- **Input:** `[1, 2, 2, 3, 4, 4]`
- **Output:** `[1, 2, 3, 4]`

**Edge Cases:**

- Input: `[]`
  - Output: `[]`
- Input: `[1, 1, 1]`
  - Output: `[1]`

---

### 4. Rotate an Array

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

---

### 5. Two Sum

**Description:** Given an array of integers, return indices of the two numbers such that they add up to a specific target.

- **Input:** `([2, 7, 11, 15], 9)`
- **Output:** `[0, 1]` (because `nums[0] + nums[1] = 2 + 7 = 9`)

**Edge Cases:**

- Input: `([1, 2, 3], 6)`
  - Output: `[]` (no solution)
- Input: `([3, 3], 6)`
  - Output: `[0, 1]`

---

### 6. Move Zeroes

**Description:** Move all zeroes to the end while maintaining the relative order of the non-zero elements.

- **Input:** `[0, 1, 0, 3, 12]`
- **Output:** `[1, 3, 12, 0, 0]`

**Edge Cases:**

- Input: `[]`
  - Output: `[]`
- Input: `[1, 2, 3]`
  - Output: `[1, 2, 3]`

---

### 7. Find the Missing Number

**Description:** Given an array containing `n` distinct numbers in the range `[0, n]`, find the one number that is missing.

- **Input:** `[3, 0, 1]`
- **Output:** `2`

**Edge Cases:**

- Input: `[0]`
  - Output: `1`
- Input: `[0, 1]`
  - Output: `2`

---

### 8. Merge Sorted Arrays

**Description:** Merge two sorted arrays into a single sorted array.

- **Input:** `([1, 3, 5], [2, 4, 6])`
- **Output:** `[1, 2, 3, 4, 5, 6]`

**Edge Cases:**

- Input: `([], [1, 2])`
  - Output: `[1, 2]`
- Input: `([1, 2], [])`
  - Output: `[1, 2]`

---

### 9. Kth Largest Element

**Description:** Find the Kth largest element in an unsorted array.

- **Input:** `([3, 2, 1, 5, 6, 4], 2)`
- **Output:** `5` (the second largest element)

**Edge Cases:**

- Input: `([1], 1)`
  - Output: `1`
- Input: `([], 1)`
  - Output: `None` (handle with a message)

---

### 10. Subarray Sum

**Description:** Given an array of integers, find the continuous subarray that sums to a specific value.

- **Input:** `([1, 2, 3, 7, 5], 12)`
- **Output:** `[2, 3, 7]` (the subarray that sums to 12)

**Edge Cases:**

- Input: `([1, 2, 3], 7)`
  - Output: `[]` (no solution)
- Input: `([], 0)`
  - Output: `[]`

---

## String Questions

### 1. Reverse a String

**Description:** Write a function that reverses a string.

- **Input:** `"hello"`
- **Output:** `"olleh"`

**Edge Cases:**

- Input: `""`
  - Output: `""`
- Input: `"a"`
  - Output: `"a"`

---

### 2. Palindrome Check

**Description:** Check if a given string is a palindrome.

- **Input:** `"racecar"`
- **Output:** `true`

**Edge Cases:**

- Input: `"A man, a plan, a canal: Panama"`
  - Output: `true` (ignore case and non-alphanumeric characters)
- Input: `"hello"`
  - Output: `false`

---

### 3. First Non-Repeating Character

**Description:** Find the first non-repeating character in a string.

- **Input:** `"leetcode"`
- **Output:** `'l'`

**Edge Cases:**

- Input: `""`
  - Output: `None`
- Input: `"aabb"`
  - Output: `None`

---

### 4. Anagrams

**Description:** Check if two strings are anagrams of each other.

- **Input:** `("listen", "silent")`
- **Output:** `true`

**Edge Cases:**

- Input: `("anagram", "nagaram")`
  - Output: `true`
- Input: `("rat", "car")`
  - Output: `false`

---

### 5. String Compression

**Description:** Implement a method to compress a string.

- **Input:** `"aabcccccaaa"`
- **Output:** `"a2b1c5a3"`

**Edge Cases:**

- Input: `"abc"`
  - Output: `"abc"` (no compression)
- Input: `""`
  - Output: `""`

---

### 6. Longest Substring Without Repeating Characters

**Description:** Find the length of the longest substring without repeating characters.

- **Input:** `"abcabcbb"`
- **Output:** `3` (substring: `"abc"`)

**Edge Cases:**

- Input: `""`
  - Output: `0`
- Input: `"bbbbb"`
  - Output: `1`

---

### 7. Count Vowels and Consonants

**Description:** Write a function to count the number of vowels and consonants in a string.

- **Input:** `"hello"`
- **Output:** `Vowels: 2, Consonants: 3`

**Edge Cases:**

- Input: `""`
  - Output: `Vowels: 0, Consonants: 0`
- Input: `"aeiou"`
  - Output: `Vowels: 5, Consonants: 0`

---

### 8. String Rotation

**Description:** Check if one string is a rotation of another string.

- **Input:** `("waterbottle", "erbottlewat")`
- **Output:** `true`

**Edge Cases:**

- Input: `("abc", "cab")`
  - Output: `false`
- Input: `("", "")`
  - Output: `true`

---

### 9. Replace Spaces

**Description:** Replace all spaces in a string with `%20`.

- **Input:** `"Mr John Smith    "` (with trailing spaces)
- **Output:** `"Mr%20John%20Smith"`

**Edge Cases:**

- Input: `""`
  - Output: `""`
- Input: `"   "`
  - Output: `"%20%20%20"`

---

### 10. Longest Palindromic Substring

**Description:** Find the longest palindromic substring in a given string.

- **Input:** `"babad"`
- **Output:** `"bab"` (or `"aba"`)

**Edge Cases:**

- Input: `""`
  - Output: `""`
- Input: `"c"`
  - Output: `"c"`

---

## Additional Resources

You can practice these questions on platforms like:

- [LeetCode](https://leetcode.com)
- [HackerRank](https://www.hackerrank.com)
- [CodeSignal](https://codesignal.com)

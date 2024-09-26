function isHappy(n) {
    const seen = new Set(); // To track the numbers we've seen

    while (n !== 1 && !seen.has(n)) {
        seen.add(n); // Add the current number to the set
        n = getNext(n); // Calculate the next number in the sequence
    }

    return n === 1; // Return true if we reach 1
}

// Helper function to calculate the next number
function getNext(num) {
    let totalSum = 0;

    while (num > 0) {
        const digit = num % 10; // Get the last digit
        totalSum += digit * digit; // Square the digit and add to the total sum
        num = Math.floor(num / 10); // Remove the last digit
    }

    return totalSum; // Return the sum of the squares of the digits
}

// Example usage:
console.log(isHappy(19)); // Output: true
console.log(isHappy(2));  // Output: false
console.log(isHappy(1));  // Output: true


/**
 *  Hash Table Concept in the Solution
    1. Tracking Seen Numbers:
        - The Set data structure (which is backed by a hash table) is used to store numbers that we have already processed.
        - This allows for O(1) average time complexity for both insertion and lookup operations. When we check if a number has already been seen, we can do it efficiently.
    
    2. Preventing Cycles:
        - By storing each number in the Set, we can easily determine if we’ve encountered that number before.
        - If we reach a number that is already in the Set, we can conclude that we're in a cycle and thus can return false.
    
    Key Points
        Hash Table Properties:
            - The Set provides fast access to check for the existence of previously seen numbers, a fundamental characteristic of hash tables.
            - When we add a number to the Set, it uses a hash function to store the number in an efficient way, allowing quick lookups.

 */
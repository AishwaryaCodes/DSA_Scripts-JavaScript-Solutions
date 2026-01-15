// Longest Substring without repeating character - using 2-pointer & Sliding window approch

function longestSubstring(str) {

    let left = 0;
    let maxLen = 0;
    let seen = new Map();

    for(let r = 0; r < str.length; r++) {
        const ch = str[r];

        if(seen.has(ch) && seen.get(ch) >= left) {
            left = seen.get(ch) + 1;
        }

        seen.set(ch, r);

        maxLen = Math.max(maxLen, r - left + 1);
    }
   
    return maxLen;
}

str = "abcabcbb";

console.log(longestSubstring(str)); // output = 3


//My Solution Complexity
//Time Complexity: O(n) 
//Space Complexity: O(1) 
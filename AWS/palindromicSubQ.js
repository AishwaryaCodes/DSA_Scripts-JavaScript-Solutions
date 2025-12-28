// Longest Palindromic Subsequence

const findPandromic = (s) => {

    const n = s.length;

    const dp = Array.from({length: n}, () => Array(n).fill(0));

    for(let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    console.log(dp);

    for(let len = 2; len <= n; len++) {
        for(let i = 0; i + len - 1 < n; i++) {
            const j = i + len - 1;

            if(s[i] === s[j]) {

            }
            else {

            }
        }
    }


}

let s  = "bbbab";

console.log(findPandromic(s)); 
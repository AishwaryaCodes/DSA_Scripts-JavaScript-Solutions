// Check if the given string is Palindrome - Using Split, Reverse, Join, Replace, Ternary Operator

function isPalindrome(str){

    str = str.toLowerCase().replace(/\W/g, ""); // non-words to empty space.

    let strRev = str.split("").reverse().join("");

    return str === strRev ? true : false;

}


console.log(isPalindrome("nitin")); // true

console.log(isPalindrome("aish")); // false

console.log(isPalindrome("A man, a plan, a canal, Panama"));
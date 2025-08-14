// Find the longestWord

function longestWord(str) {

    if(str.trim().length === 0) return false;

    let word = str.split(" ").sort((a, b) => b.length - a.length);

    return word[0];

}

console.log(longestWord("Hello word, I am Aish, I am web developer "));
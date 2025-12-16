const freqSort = (s) => {

    const freqMap = {};

    for(let ch of s) {
        freqMap[ch] = (freqMap[ch] || 0) + 1;
    }

    return Object.keys(freqMap)
    .sort((a, b) => freqMap[b] - freqMap[a] || a.localeCompare(b))
    .map(ch => ch.repeat(freqMap[ch]))
    .join('');

}

let s = "aacccbbb";   // sort  - bbb ccc aa

console.log(freqSort(s));
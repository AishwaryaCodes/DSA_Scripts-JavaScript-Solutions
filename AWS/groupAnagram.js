// Group Anagram

const findAna = (strs) => {

    let strMap = new Map();

    for(const word of strs) {

        const count = Array(26).fill(0);

        for(const ch of word) {
            console.log(ch.charCodeAt(0) - 97);
            count[ch.charCodeAt(0) - 97]++;
        }

        const key = count.join('#');
        console.log(key);

        if(!strMap.has(key)) {
            strMap.set(key, []);
        }

        console.log(strMap);

       strMap.get(key).push(word);
    }

    return Array.from(strMap.values());

}

let strs = ["eat","tea","tan","ate","nat","bat"]; 
// [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(findAna(strs));
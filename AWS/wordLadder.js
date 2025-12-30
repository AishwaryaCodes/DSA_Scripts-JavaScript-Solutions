// Word Ladder

const findPath = (beginWord, wordList, endWord) => {

    let wordSet = new Set(wordList);

    if(!wordSet.has(endWord)) return 0;

    const patterMap = new Map();

    let wordLen = beginWord.length;

    for(const word of wordList) {

        for(let i = 0; i < wordLen; i++) {
            const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
            console.log(pattern);

            if(!patterMap.has(pattern)) {
                patterMap.set(pattern, []);
            }

            patterMap.get(pattern).push(word);
        }
    }


    console.log(patterMap);

     const queue = [[beginWord, 1]];
     const visited = new Set([beginWord]);

     while(queue.length > 0) {
        const [word, level] = queue.shift();

        for(let i = 0; i < wordLen; i++) {
            const pattern = word.slice(0, i) + "*" + word.slice(i + 1);
            const neigh = patterMap.get(pattern) || [];

            for(const nextWord of neigh) {
                if(nextWord === endWord) return level + 1;
                if(!visited.has(nextWord))  {
                    visited.add(nextWord);
                    queue.push([nextWord, level + 1]);
                }
            }

            patterMap.set(pattern, []);
        }
     }


     return 0;

}

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot","dot","dog","lot","log","cog"]

// o/p = 5

console.log(findPath(beginWord, wordList, endWord));

// beginWord  ----- path to ----> endWord 
// Short Path to reach endWord
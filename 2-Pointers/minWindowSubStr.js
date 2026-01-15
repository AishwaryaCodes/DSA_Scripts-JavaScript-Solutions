// Minimum Window Substring

const findMinStr = (s, t) => {

    if(t.length === 0 || s.length === 0) return "";

    const need = new Map();
    for(const ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    const required = need.size;

    const window = new Map();
    let formed = 0;
    let left = 0;

    let bestLen = Infinity;
    let bestL = 0;


    for(let r = 0; r < s.length; r++) {
        const ch = s[r];

        window.set(ch, (window.get(ch) || 0) + 1);

        console.log(window);

        if(need.has(ch) && window.get(ch) === need.get(ch)) formed++;

        while(formed === required) {
            const windowLen = r - left + 1;

            if(windowLen < bestLen) {
                bestLen = windowLen;
                bestL = left;
            }

            const leftch = s[left];
            window.set(leftch, window.get(leftch) - 1);

            if(need.has(leftch) && window.get(leftch) < need.get(leftch)) formed--;

            left++
        }
    }

    return bestLen === Infinity ? "" : s.slice(bestL, bestL + bestLen);

}

let  s = "ADOBECODEBANC", t = "ABC";

console.log(findMinStr(s, t));
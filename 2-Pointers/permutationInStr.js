// Permutation in String

const findPermu = (s1, s2) => {

  const m = s1.length, n = s2.length;

    if(m > n) return false;

    const need = new Array(26).fill(0);
    const win = new Array(26).fill(0);

    const idx = (c) => c.charCodeAt(0) - 97;

    for(let i = 0; i < m; i++) {
        need[idx(s1[i])]++;
        win[idx(s2[i])]++;
    }

    let matches = 0;

    for(let i = 0; i < 26; i++) {
        if(need[i] === win[i]) matches++;
    }

    if(matches === 26) return true;

    for(let r = m; r < n; r++){
        const inChar = idx(s2[r]);
        const outChar = idx(s2[r - m]);

        win[inChar]++;
        if(win[inChar] === need[inChar]) matches++;
        else if (win[inChar] === need[inChar] + 1) matches--;

        win[outChar]--;
        if(win[outChar] === need[outChar]) matches++;
        else if (win[outChar] === need[outChar] - 1) matches--;

         if(matches === 26) return true;
    }


    return false;


}

let s1 = "ab", s2 = "eidboaoo";

console.log(findPermu(s1, s2));
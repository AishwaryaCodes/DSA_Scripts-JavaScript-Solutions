const shuffleStr = (s, ind) => {

    let res = [];

    for(let i = 0; i < s.length; i++) {
        res[ind[i]] = s[i];
    }

    return res.join('');

}

let s = "codeleet", ind = [4,5,6,7,0,2,1,3];

console.log(shuffleStr(s, ind));
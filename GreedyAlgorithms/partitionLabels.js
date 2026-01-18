// Partition Labels

const findP = (s) => {

    const last = {};

    for(let i = 0; i < s.length; i++) {
        last[s[i]] = i;
    }

    const res = [];
    let l = 0;
    let end = 0;

    for(let i = 0; i < s.length; i++) {
        end = Math.max(end, last[s[i]]);

        //console.log(last[s[i]])

        if(i === end) {
            res.push(end - l + 1);
            l = i + 1;
        }
    }

    //console.log(last)

    return res;

}

let s = "ababcbacadefegdehijhklij";

console.log(findP(s));
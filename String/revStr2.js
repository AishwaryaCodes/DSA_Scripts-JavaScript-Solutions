const revStr = (s, k) => {

    let res = s.split("");
    let str = "";

    for(let i = 0; i < res.length; i+=2*k) {

        let start = i;

        let end = Math.min(i + k - 1, res.length - 1);


        while(start < end) {
            [res[start], res[end]] = [res[end], res[start]];
            start++;
            end--;
        }
    }

    return res.join("");



}

let  s = "abcdefg", k = 2;

console.log(revStr(s,k));
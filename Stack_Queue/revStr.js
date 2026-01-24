// Rev String

const revStr = (s) => {

    let stack = [];

    for(let ch of s) stack.push(ch);

    let res = "";

    while(stack.length) res += stack.pop();

    return res;

}

let s = "abc";

console.log(revStr(s)); // res = "cba"
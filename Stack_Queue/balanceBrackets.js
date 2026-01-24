function isBalance(s) {
    let st = [];

    let brackets = {
        '}' : '{',
        ')' : '(',
        ']' : '['
    };

    for(let char of s) {
        if(char === '(' || char === '{' || char === '[') {
            st.push(char);
        }
        else if (char === ')' || char === '}' || char === ']') {
            if (st.length === 0 || st.pop() !== brackets[char]) {
                return false;
            }   
        }
    }
    return st.length === 0;
}

console.log(isBalance("(){}[]"));

console.log(isBalance("("));    
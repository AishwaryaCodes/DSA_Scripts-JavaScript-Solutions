function infixToPostfix(s) {

    let precedence = {
                    '+' : 1,
                    '-' : 1,
                    '*' : 2,
                    '/' : 2,
                    '^' : 3
                    };

    let st = [];

    let res = "";

    for(let char of s) {
        if(/[A-Za-z0-9]/.test(char)) {
            res += char;
        }

        else if(char === '(') {
            st.push(char);
        }

        else if(char === ')') {
            while(st.length && st[st.length - 1] !== '(') {
                res += st.pop();
            }
            st.pop();
        }

        else {
            while(st.length && precedence[st[st.length - 1]] >= precedence[char]){
                res += st.pop();
            }
            st.push(char);
        }
    }

    while(st.length) {
        res += st.pop();
    }

    return res;

}

console.log(infixToPostfix("A+B*C"));
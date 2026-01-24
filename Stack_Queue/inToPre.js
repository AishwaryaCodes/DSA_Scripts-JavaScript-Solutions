function infixToPrefix(s) {
    let precedence = {
                '+' : 1,
                '-' : 1,
                '*' : 2,
                '/' : 2,
                '^' : 3
    };

    let st = [];
    let res = "";

    let revS = "";
    for(let i = s.length - 1; i >= 0; i++) {
        let char = s[i];
        if(char === '(') {
            revS += ')';
        }
        else if(char === ')') {
            revS += '(';
        }
        else {
            revS += char;
        }
    }

    
    for(let i = 0; i < revS.length; i++){
        let char = revS[i];

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
            while(st.length && precedence[st[st.length - 1]] >= precedence[char]) {
                res += st.pop();
            }
            st.push(char);
        }
    }


    while(st.length) {
        res += st.pop();
    }


    let preRes = "";
    for(let i = res.length - 1; i >= 0; i--){
        preRes += res[i];
    }


    return preRes;

}

console.log(infixToPrefix("A+B*C"));  // Output: +A*BC
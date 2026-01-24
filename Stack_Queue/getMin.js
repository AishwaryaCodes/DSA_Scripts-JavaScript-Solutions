let st = [];

let min = null;

function push(val) {
    if(st.length === 0){
        st.push(val);
        min = val;
    }
    else {
        if(val < min) {
            let newVal = 2 * val - min;
            st.push(newVal);
            min = val;
        }
        else {
            st.push(val);
        }
    }
}

function pop(){
    if(st.length === 0) return;

    let top = st.pop();

    if(top < min) {
        min = 2 * min - top; 
    }
}

function top() {
    if(st.length === 0) return null;

    let top = st[st.length - 1];
    return top < min ? min : top;
}

function getMin() {
    return st.length === 0 ? null : min;
}


push(5);
push(2);
push(8);
console.log(getMin()); // 2
pop();
console.log(getMin()); // 2
pop();
console.log(getMin()); // 5




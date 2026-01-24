function nextGreaterElement(arr) {
    let st = [];
    let res = new Array(arr.length).fill(-1);


    for(let i = arr.length - 1; i >= 0; i--){

        while(st.length > 0 && st[st.length - 1] <= arr[i]) {
            st.pop();
        }

        if(st.length > 0) {
            res[i] = st[st.length - 1];
        }

        st.push(arr[i]);
    }

    return res;
}

let arr = [4, 5, 2, 10, 8];
console.log(nextGreaterElement(arr)); 
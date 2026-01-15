// max sliding window

const maxWin = (arr, k) => {

    let maxWin = [];

    let deque = [];

    for(let r = 0; r < arr.length; r++) {

        if(deque.length && deque[0] <= r - k) {
            deque.shift();
        }

        while(deque.length && arr[deque[deque.length - 1]] < arr[r]) deque.pop();

        deque.push(r);

        if(r >= k - 1) maxWin.push(arr[deque[0]]);

    }

    return maxWin;

}

let arr = [1,3,-1,-3,5,3,6,7], k = 3;

console.log(maxWin(arr, k));
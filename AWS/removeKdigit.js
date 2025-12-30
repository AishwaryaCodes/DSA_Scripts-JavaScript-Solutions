// Remove K Digits

const removeKdigit = (nums, k) => {

    let stack = [];

    for(const digit of nums) {
        while(k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            console.log(stack);
            stack.pop();
            k--;
        }

        stack.push(digit);
    }

    console.log(stack);

    while(k > 0) {
        stack.pop();
        k--;
    }

    let res = stack.join("").replace(/^0+/, '');

    return res.length === '' ? '0' : res;
 
}

let nums = "1432219", k = 3;  // "1219"

console.log(removeKdigit(nums, k));
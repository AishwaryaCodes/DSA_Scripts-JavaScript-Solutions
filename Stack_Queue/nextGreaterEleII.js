var nextGreaterElement = function(nums1, nums2) {

    const stack = [];

    const next = new Map();

    for(const n of nums2) {

        while(stack.length && stack[stack.length - 1] < n) {
            next.set(stack.pop(), n);
        }

        stack.push(n);
    }

    console.log(stack);


    while (stack.length) next.set(stack.pop(), -1);

    console.log(next);


    return nums1.map(n => next.get(n));

};

let nums1 = [4,1,2], nums2 = [1,3,4,2];

console.log(nextGreaterElement(nums1, nums2))
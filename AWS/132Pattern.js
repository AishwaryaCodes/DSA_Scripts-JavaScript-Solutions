// 132 Pattern

const findPattern = (nums) => {

    let stack = [];

    let third = -Infinity;

    for(let i = nums.length - 1; i >= 0; i--) {

        if(nums[i] < third) return true;

        while(stack.length > 0 && nums[i] > stack[stack.length - 1]) {
            third = stack.pop();
        }

        stack.push(nums[i]);
    }

    return false;

};

let nums = [3,1,4,2]; // [1, 4, 2] // true

console.log(findPattern(nums));

 // such that 
 // i < j < k  
 // nums[i] < nums[k] < nums[j]


 // 132 pattern
 // i = first 
 // j = third
 // k = second

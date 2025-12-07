// Given an array of numbers [6,19,29,32,1,6,67,3,9,187], 
// and a target 38, return indices of the two 
// numbers such that they 
// add up to target and analyze your solution.

// key : val 
// number : index
// {6: 0}
// {19: 1}

// {6: 2} - 

// return [0, 1] , indices val
// check every pair 
// multiple sol - consider 1st
// 


//[6,19,29,32,1,6,67,3,9,187]

//{6- 0}

// nums[i] = 6

// {}

function sumOfTarget(nums, target) {

    const map = new Map(); // {}

    for(let i = 0; i < nums.length; i++) {

        const sum = target - nums[i]; // sum = 38 - 6 = 32 , {}

        if(map.has(sum)) {
            return [map.get(sum), i];  // { }
        }
        
        map.set(nums[i], i); // {6 = 0, }

    }

    return null;
}

let arr = [6,19,29,32,1,6,67,3,9,187]
let t = 38;
console.log(sumOfTarget(arr, t));

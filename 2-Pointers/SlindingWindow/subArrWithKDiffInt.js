// Subarrays with K Different Integers

// A subarray is valid if it contains exactly K distinct numbers (unique values)


const find = (nums, k) => {

    return atmost(nums, k) - atmost(nums, k - 1);

}


const atmost = (nums, k) => {

    if(k < 0) return 0;

    const map = new Map();
    let count = 0;
    let l = 0;

    for(let r = 0; r < nums.length; r++) {

        const num = nums[r];

        map.set(num, (map.get(num) || 0) + 1);

        while(map.size > k) {
            const left = nums[l];

            map.set(left, map.get(left) - 1);
            if(map.get(left) === 0) map.delete(left);
            l++;
        }

        count += (r - l + 1);

    }

    return count;

}


let nums = [1,2,1,2,3], k = 2; // subarray with 2 unique values 

// Subarrays formed [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
// all has 2 unique values

console.log(find(nums, k));
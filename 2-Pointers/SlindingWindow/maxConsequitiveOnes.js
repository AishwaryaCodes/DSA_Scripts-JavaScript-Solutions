// Max Consecutive Ones III

const findMax = (nums, k) => {

    let l = 0;
    let zeroCount = 0;
    let best = 0;

    for(let r = 0; r < nums.length; r++) {

        if(nums[r] === 0) zeroCount++;

        while(zeroCount > k) {
            if(nums[l] === 0) zeroCount--;
            l++;
        }

        best = Math.max(best, r - l + 1);
    }

    return best;

}


let nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2;

console.log(findMax(nums, k));
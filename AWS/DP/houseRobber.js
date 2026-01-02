// House Robber

const robbMoney = (nums) => {

    let robPrev = 0; // dp[i - 1]
    let robPevPrev = 0; // dp[i - 2]

    for(const money of nums) {

        const robThis = robPevPrev + money;

        const skipThis = robPrev;

        const best = Math.max(robThis, skipThis);
        
        robPevPrev = robPrev;

        robPrev = best;
    }

    return robPevPrev;

}

let nums = [1,2,3,1];

console.log(robbMoney(nums));
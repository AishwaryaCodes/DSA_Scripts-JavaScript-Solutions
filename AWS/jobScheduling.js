// Job Scheduling

const findMax = (startTime, endTime, profit) => {

    const n = startTime.length;
    const jobs = [];

    for(let i = 0; i < n; i++) {
        jobs.push([startTime[i], endTime[i], profit[i]]);
    }

    jobs.sort((a, b) => a[1] - b[1]);

    console.log(jobs);

    const ends = jobs.map(j => j[1]);
    const dp = new Array(n).fill(0);

    console.log(ends);
    console.log(dp);

    const findLastNonOverlap = (target) => {
        let lo = 0, hi = n - 1;
        let ans = -1;

        while(lo <= hi) {
            const mid = Math.floor((lo + hi) / 2);
            if(ends[mid] <= target) {
                ans = mid;
                lo = mid + 1;
            }
            else {
                hi = mid - 1;
            }
        }
        return ans;
    }


    for(let i = 0; i < n; i++) {
        const [s, e, p] = jobs[i];

        const prev = findLastNonOverlap(s);
        const take = p + (prev >= 0 ? dp[prev]: 0);
        const skip = i > 0 ? dp[i - 1] : 0;

        dp[i] = Math.max(skip, take);
    }

    return dp[n - 1];
}

startTime = [1,2,3,3], 
endTime = [3,4,5,6], 
profit = [50,10,40,70]
// Output: 120

console.log(findMax(startTime, endTime, profit));
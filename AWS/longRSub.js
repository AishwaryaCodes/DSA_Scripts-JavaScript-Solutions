// Longest Increasing Subsequence
var lengthOfLIS = function(nums) {

    let tails = [];

    for(let num of nums){
        let left = 0, right = tails.length;

        while(left < right) {
            let mid = Math.floor((left + right) /2);
             console.log(mid);
            if(tails[mid] >= num) right = mid;
            else left = mid + 1;
        }

        tails[left] = num;
    }


    
    console.log(tails)


    return tails.length;

}

let nums = [10,9,2,5,3,7,101,18];

console.log(lengthOfLIS(nums));
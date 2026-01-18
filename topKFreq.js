// Top K Frequent Elements

const findK = (nums,k) => { 

    const freq = new Map();

    for(const n of nums) {
        freq.set(n, (freq.get(n) || 0) + 1);
    }

    const bucket = new Array(nums.length + 1).fill(null).map(() => []);


    for(const [num, count] of freq.entries()) {
        bucket[count].push(num);
    }

    const res = [];


    for(let i = bucket.length - 1; i >= 0 && res.length < k; i--) { 
        for(const num of bucket[i]) {
            res.push(num);
            if(res.length === k) break;
        }
    }

    return res;

}


let nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

console.log(findK(nums,k));
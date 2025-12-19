// Insert Intervals - using Greedy Algorithm. 
// 2 sorted objArray is given, add the 2nd interval into 1st interval
// Array should not have overlapping intervals 


function insertIntervals(arr, interval) {

    let result = [];

    let i = 0,  n = arr.length;

    while(i < n && arr[i][1] < interval[0]) {
        result.push(arr[i]);
        i++;
    }

    while(i < n && arr[i][0] <= interval[1]) {
        interval[0] = Math.min(interval[0], arr[i][0]);
        interval[1] = Math.max(interval[1], arr[i][1]);
        i++;
    }

    result.push(interval);

    while(i < n) {
        result.push(arr[i]);
        i++;
    }

    return result;    
}

let arr = [[1,3],[6,9]];

interval = [2,5];

console.log(insertIntervals(arr, interval));


// Shortest Job First(SJF) for CPU Scheduling - Greedy Algorithm 


function shortestJobFirst(arr) {

    arr.sort((a,b) => a - b);   // [1, 2, 3, 4, 7]

    let timer = 0;
    let waiting = 0;

    for(let i = 0; i < arr.length; i++) {
        waiting += timer;
        timer += arr[i] 
    }

    return  Math.floor(waiting / arr.length);
}

arr = [4, 3, 7, 1, 2];

console.log (shortestJobFirst(arr)); 4

// Time Complexity: O(n log n)
// Space Complexity: O(1)
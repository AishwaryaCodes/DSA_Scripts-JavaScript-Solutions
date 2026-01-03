// Task Scheduler

const computeTasks = (tasks, n) => {

    const freq = new Array(26).fill(0);


    for(const ch of tasks) {
        freq[ch.charCodeAt(0) - 65]++;
    }

    freq.sort((a, b) => b - a);

    const maxFreq = freq[0];

    let maxCount = 0;

    for(const f of freq) {
        if(f === maxFreq) maxCount++;
        else break;
    }

    const slots = (maxFreq - 1) * (n + 1) + maxCount;

    return Math.max(tasks.length, slots);

}

let tasks = ["A","A","A","B","B","B"], n = 2;

console.log(computeTasks(tasks, n));

console.log(tasks.length)
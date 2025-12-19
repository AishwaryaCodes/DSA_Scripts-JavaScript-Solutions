// Job Sequencing 

function maxProfit(id, deadline, profit) {

    const n = id.length;

    let jobs = [];
    
    for(let i = 0; i < n; i++) {
        jobs.push({id: id[i], deadline: deadline[i], profit: profit[i]})
    }

    jobs.sort((a,b) => b.profit - a.profit);

    let maxDeadline = Math.max(...deadline);

    let slots = new Array(maxDeadline + 1).fill(false);

    let countJobs = 0; 
    let totalProfit = 0;

    for(let job of jobs) {
        for(let i = job.deadline; i > 0; i--) {
            if(!slots[i]) {
                slots[i] = true;
                countJobs++;
                totalProfit += job.profit;
                break;
            }
        }
    }
return [countJobs, totalProfit];
}

let id = [1,2,3,3]
let dedline = [3,4,5,6]
let profit = [50,10,40,70]

console.log(maxProfit(id, dedline, profit)) // [2, 127]
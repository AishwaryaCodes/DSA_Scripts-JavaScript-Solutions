// N meetings in one room 

function maxMeetings(start, end) {

    let n = start.length;

    const meetings = [];

    for(let i = 0; i < n; i++) {
        meetings.push({start: start[i], end: end[i]})
    }

    meetings.sort((a, b) => a.end - b.end);

    let count = 1;

    let lastEndTime = meetings[0].end;

   for(let i = 0; i < n; i++) {
    if(meetings[i].start > lastEndTime) {
        count++;
        lastEndTime = meetings[i].end
    }
   }

    return count;

}

let start= [1, 3, 0, 5, 8, 5];

let end=  [2, 4, 6, 7, 9, 9];

console.log(maxMeetings(start,end));
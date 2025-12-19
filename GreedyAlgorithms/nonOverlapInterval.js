// Non Overlapping Interval - Similar to Meeting Room Problem

function nonOverlap(arr) {

    if(arr.length === 0) return 0;

    arr.sort((a,b) => a[1] - b[1]);

    let count = 1;

    let lastEndTime = arr[0][1];

    //console.log(lastEndTime);

    for(let i = 1; i < arr.length; i++){

        if(arr[i][0] >= lastEndTime) {
            count++; 
            lastEndTime = arr[i][1];
        }
    }

    return arr.length - count;

}

arr = [[1,2],[2,3],[3,4],[1,3]];

console.log(nonOverlap(arr));
const max = (box, truckSize) => {

    box.sort((a,b) => b[1] - a[1]);

    let totalUnits = 0;
    let remainingSize = truckSize;


    for(let i = 0; i < box.length; i++) {

        let boxes = box[i][0];
        let unit = box[i][1];

        if(boxes <= remainingSize) {
            totalUnits += boxes * unit;
            remainingSize -=boxes;
        }
        else {
            totalUnits +=  remainingSize * unit;
            break;
        }
    }

    return totalUnits;
}

let boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10;

console.log(max(boxTypes, truckSize));

// boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10

// 5 * 10 = 50 ----- truckSize: 10 - 5 = 5 
// 2 * 5 = 10

// 3 * 9 = 27 ----- truckSize: 5 - 3 = 2

// 4 * 7 = 28 ----- 
// 2 * 7 = 14 ----- truckSize: 2 - 2 = 0

// 50 + 27 + 14 = 91

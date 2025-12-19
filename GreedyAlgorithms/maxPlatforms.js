//

function maxPlatforms(arrival, departure) {

    let n = arrival.length;

    arrival.sort((a,b) => a - b);
    departure.sort((a,b) => a - b);


    let maxPlatform = 0;
    let platformRequired = 0; 

    let i = 0, j = 0;

    while(i < n && j < n) {
       if(arrival[i] <= departure[j]) {
        platformRequired++; 
        i++;
       }
       else {
        platformRequired--;
        j++;
       }

       maxPlatform = Math.max(maxPlatform, platformRequired);
    }

    return maxPlatform

}

let arrival= [900, 940, 950, 1100, 1500, 1800];
let departure = [910, 1200, 1120, 1130, 1900, 2000]; 

console.log(maxPlatforms(arrival, departure));
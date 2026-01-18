// Car Pooling

const canPool = (trips, capacity) => {

    const diff = new Array(1001).fill(0);

    for(const [p, to, from] of trips) {
        diff[from] += p;
        diff[to] -= p;
    }

    let curr = 0;

    for(let i = 0; i < 1000; i++) {
        curr += diff;

        if(curr > capacity) return false;
    }

    return true;
}

trips = [[2,1,5],[3,3,7]], capacity=4;
console.log(canPool(trips, capacity));


// at 1: +2

// at 5: -2

// at 3: +3

// at 7: -3
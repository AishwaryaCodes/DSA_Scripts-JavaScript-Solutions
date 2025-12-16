const subArrSum = (n, k) => {

    let result = 0; // count of subarray 
    let prefix  = 0; // sum of each element from starting  

    const freq = new Map(); 

    freq.set(0, 1); // { 0 : 1 } key = sum = 0 , value = seen so far = 1 time 

    for(let i = 0; i < n.length; i++) {
        prefix += n[i];

        const need  = prefix - k;

        if(freq.has(need)) {
            result += freq.get(need);
        }

        freq.set(prefix, (freq.get(prefix) || 0) + 1);
    }

    return result;

}


// nums = [1,2,3]
// k = 3

// prefix  = 0, 0 +1 = 1, 1 + 2 = 3, 3 + 3 = 6
// need  = 6 - k = 6 - 3 = 3

// O/P = 2 [1, 2] , [3]


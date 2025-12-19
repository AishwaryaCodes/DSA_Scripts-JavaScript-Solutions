// Jump Game - Greedy Algorithm - How much max you can jump ? reach at the last element of the array(n) and return true else false. 

function jumpMaxGame(arr) {

    let maxIndex = 0;

    for(let i = 0; i < arr.length; i++){

        if(i > maxIndex) return false;

        maxIndex = Math.max(maxIndex, i + arr[i]); 
    }

    return true;
}


console.log(jumpMaxGame([2, 3, 1, 1, 4])); // Output: true
console.log(jumpMaxGame([3, 2, 1, 0, 4])); // Output: false

// Time Complexity: O(n)
// Space Complexity: O(1)
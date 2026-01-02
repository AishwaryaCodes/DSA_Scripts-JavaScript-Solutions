// Climbing Stairs

const climbSteps = (n) => {

    if(n <= 2) return 2;

    let prev1 = 1;

    let prev2 = 2;

    for(let i = 3; i <= n; i++) {

        let curr = prev1 + prev2;

        prev1 = prev2;

        prev2 = curr;

        console.log(curr);
    }


return prev2;


}

let n = 5;

console.log(climbSteps(n));
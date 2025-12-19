// 

function minimumCoin(coins, value) {

    let sum = 0;

    for(let i = coins.length; i >= 0; i--) {
        if(value <= coins[i]) {
            sum += coins[i] 
        }
    }


}

let coins = [1,2,5];
let value = 11;

console.log(minimumCoin(coins, value));
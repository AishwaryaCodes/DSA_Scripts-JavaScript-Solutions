// Coin Change

const numOfCoins = (coins, amt) => {

    const dp = new Array(amt + 1).fill(Infinity);

    dp[0] = 0;

    for(let a = 1; a <= amt; a++) {

        for(const c of coins) {

            if(a - c >= 0 && dp[a - c] !== Infinity) {
                dp[a] = Math.min(dp[a], dp[a - c] + 1);
            }

        }
    }

    return dp[amt] === Infinity ? -1 : dp[amt];

}

let coins = [1,2,5];

let amount = 11;

console.log(numOfCoins(coins, amount));
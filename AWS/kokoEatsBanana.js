// Koko Eating Bananas

const eatBanana = (piles, h) => {

    let left = 1;
    let right = Math.max(...piles);

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);

        let hrs = 0;

        for(let i = 0; i < piles.length; i++) {
            hrs += Math.ceil(piles[i] / mid);
        }

        if(hrs > h) left = mid + 1

        else right = mid - 1;
    }

    
   return left;

}

let h = 8;
let piles = [3,6,7,11];

// K banana / Hr
// each Hr - only 1 pile

console.log(eatBanana(piles, h));
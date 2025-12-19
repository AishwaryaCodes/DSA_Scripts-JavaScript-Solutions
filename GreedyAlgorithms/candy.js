// Distribute Candy to every children, considering the rating. - Slope Approach Instuition Based
// Children with high rating will get more Candy than his neighbour. 
// Minimize the total num of candy, that your distributing and return the total 

function candyDistribute(ratingArr) {

    let left = [ratingArr.length], right = [ratingArr.length];
    left[0] = 1;
    right[ratingArr.length - 1] = 1;


   for(let i = 0; i < ratingArr.lenght - 1; i++) {

    if(ratingArr[i] > ratingArr[i - 1]) left[i] = left[i -1] + 1;
    
    else left[i] = 1;
   }


   for(let j = ratingArr.length - 1; j >= 0; j--) {

    if(ratingArr(j) > ratingArr[j + 1]) right[j] = right[j + 1] + 1;

    else right[j] = 1
   }


   // Take max from right and left
   let sum = 0; 
   for(let k = 0; k < ratingArr.lenght; k++) {}

   



   
}


ratingArr = [3, 4, 2, 3, 1] // Child's rating value Array


console.log(candyDistribute(ratingArr)); 

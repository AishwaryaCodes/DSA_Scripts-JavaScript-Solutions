// Fractional Knapsack Algorithm - Greedy Algorithm. 
// Pic a value which is max, but it has low weight and add the values in total, to make the maximum total 

function fractionalKnapsack(objArr, BagWeight) {

  // Sort items by value/weight ratio in descending order // [{60,10}, {100,20}, {200, 50}, {100,50}]; - To maximize the total value.
  objArr.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

  let total = 0;

for(let i = 0; i < objArr.length; i++) {
    if(objArr[i].weight <= BagWeight) {
        total += objArr[i].value;
        BagWeight -= objArr[i].weight;
    }
    else {
      total += (objArr[i].value / objArr[i].weight) * BagWeight;
      break;
    }
}

return total;
}

const objArr = [
    { value: 100, weight: 20 },
    { value: 60, weight: 10 },
    { value: 100, weight: 50 },
    { value: 200, weight: 50 }
];

console.log(fractionalKnapsack(objArr, 90));


// Time Complexity: O(n log n) - sorting, and for loop
// Space Complexity: O(1)
// Lemonade change - Greedy Algorithm

function lemonadeChange(arr) {
  let five = 0, ten = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === 5) five++;

    else if (arr[i] === 10) {
      if (five > 0) {
        five--;
        ten++;
      } 
      else return false;
    } 
    
    else {
      if (ten > 0 && five > 0) {
        ten--;
        five--;
      } 
      else if (five >= 3) five -= 3;
      else return false;
    }

  }
  return true;
}

console.log(lemonadeChange([5, 5, 5, 10, 20])); // Expected output: true
console.log(lemonadeChange([10, 10])); // Expected output: false


// Time Complexity (TC): O(n)
// Space Complexity (SC): O(1)

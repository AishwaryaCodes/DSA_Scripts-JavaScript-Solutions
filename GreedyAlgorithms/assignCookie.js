// Assign Cookie problem using Greedy Algorithm. 

function assignCookie(child, cookie) {

    //Sort the array using sort function. 
    child.sort((a,b) => a - b);
    cookie.sort((a,b) => a - b);

    let n = child.length;
    let m = cookie.length;

    let i = 0; // Track children
    let j = 0; // Track cookie

    
    while(i < n && j < m) {
        if(cookie[j] >= child[i]) {
            i += 1
        }
        j += 1;
    }

return i;

}

console.log(assignCookie([3 , 4, 2, 3, 1], [2, 4, 1, 3, 1])); 
// Output: 4
// ch = [1, 2, 3, 3, 4]  c = [1, 1, 2, 3, 4]



// Time Complexity: O(n log n + m log m)
// Space Complexity: O(1)
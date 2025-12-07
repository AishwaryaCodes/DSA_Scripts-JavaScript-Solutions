const findOddNum = (n) => {

   while(n.length > 0) {
    if(Number(n) % 2 !== 0) return n;
    n = n.slice(0, -1)
   }

   return "";

}


let n = "52";

console.log(findOddNum(n)); // "5"
const rotateStr = (s, g) => {

   for(let i = 0; i < s.length; i++) {

    if(s === g) return true;

    let last = s[s.length -1];

    s = last + s.slice(0, s.length - 1);

   }

   return false;


}

let s = "abcde", g = "cdeab"; 

console.log(rotateStr(s, g));
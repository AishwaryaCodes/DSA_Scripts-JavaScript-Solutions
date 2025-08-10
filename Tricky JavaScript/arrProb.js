//console.log(v);
const arrFun = () => arguments.length;

console.log("total args len", arrFun(1, 2, 3));

console.log("************************");

var arr = ["a", "b", "c", "d", "e"];

console.log(arr.length);
delete arr[0];
console.log(arr);
console.log(arr[0]);
console.log(arr.length);

console.log("************************");

var arr1 = new Array(3);
console.log(arr1); // [empty * 3]

var arr2 = [];
arr2[2] = 100; 
console.log(arr2); // [ empty , empty, 100]

var arr3 = [, , ,];
console.log(arr3); // [empty * 3]

console.log("************************");

const obj = {
    prob1: function () {
        return 0; 
    },

    prob2 () {
        return 1; 
    },

    ["prob" + 3] () {
        return 2;
    },
};

console.log(obj.prob1());
console.log(obj.prob2());
console.log(obj.prob3());


console.log("************************");

console.log(1 < 2 < 3); // 1 < 2 = true , true < 3 = 1 < 3  ----- true
console.log(3 > 2 > 1); // 3 > 2 = true , true > 1 =  1 > 1 ----- false 

console.log("************************");


function priNum(f, s, f) {
    console.log(f, s, f);
}
priNum(1, 2, 3);


console.log("************************");

// const printNumArrow = (f, s, f) => {
//     console.log(f, s, f);
// }
//printNumArrow(1, 2, 3);


console.log("************************");

console.log("this left", String.prototype.trimLeft.name === "trimLeft");

console.log("this start", String.prototype.trimLeft.name === "trimStart");


console.log("************************");

console.log(Math.max());

console.log(Math.min());


console.log("************************");

console.log(10 == [10]) // true
console.log(10 == [[[[[[10]]]]]]); // true


console.log(10 === [10]) // false
console.log(10 === [[[[[[10]]]]]]);  // false

console.log("************************");

console.log(10 + "10") //1010
console.log(10 - "10") // 0


console.log("************************");

console.log([0] == false); // true

if([0]) {
    console.log("I am true"); // this will run 
} 
else {
    console.log("I am false");
}

console.log("************************");

console.log([1, 2] + [3, 4]);


console.log("************************");

const num = new Set([1, 1, 2, 3, 4]); //Set(4) { 1, 2, 3, 4 }
console.log(num);

const b = new Set(["chrome", "firefox"]); //Set(1) { 'chrome' }
console.log(b);

const c = new Set("firefox"); // Set(6) { 'f', 'i', 'r', 'e', 'o', 'x' }
console.log(c);

console.log("************************");

console.log(NaN === NaN); // false because NaN is defined as “not equal to anything, including itself

console.log(null === null); // true

console.log(undefined === undefined); // true

console.log({} === {});    // false           
console.log([] === []);    // false  

console.log("************************");

let d  = [1, 2, 3, 4, NaN];

console.log(d.indexOf(4));
console.log(d.indexOf(NaN));
console.log(d.findIndex(Number.isNaN));


console.log("************************");

//let [a, ...z,] = [1, 2, 3, 4, 5];
console.log(a, z);


let v = "aish";
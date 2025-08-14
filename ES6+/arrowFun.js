// Arrow Functions (=>) - Short syntax for writting functions.

const add = (a,b) => a + b;  
console.log(add(3, 5));

// Removed datatype
sum = (a,b) => a + b;
console.log(add(2, 2));


//this keyword always represents the object no matter who called the function
const person = {
    name: "Alice",
    sayHello: function () {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`); // this - refer to person
        },1000);
    },
};

person.sayHello();


const z = a => a + 2;

console.log(z)

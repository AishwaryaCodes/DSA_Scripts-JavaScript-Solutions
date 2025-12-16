// Question: There are 3 Promises: promiseA, promiseB and promiseC. 
// PromiseA returns userId that is required for the execution of promiseB and promiseC. 
// Implement code that executes promiseA first, 
// and then promiseB and promiseC.

// Run A first → get userId → then run B & C using userId

// PromiseA returns a userId after 1 sec
function promiseA() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("A done");
            resolve(101);  // return userId
        }, 1000);
    });
}

function promiseB(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("B executed using userId: " + userId);
        }, 500);
    });
}

function promiseC(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("C executed using userId: " + userId);
        }, 800);
    });
}


promiseA() 
    .then(userId => Promise.all([promiseB(userId), promiseC(userId)]))
    .then(([resultB, resultC]) => {
        console.log("B result", resultB);
        console.log("C result", resultC);
    })
    .catch(err => console.error(err));


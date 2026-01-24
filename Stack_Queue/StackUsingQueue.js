class StackUsingQueue {
    constructor() {
        this.queue = [];
    }

push(e) {
    this.queue.push(e); // Add element to the end. 
    //rotate the queue to move the new element to the front. 
    for(let i = 0; i < this.queue.length - 1; i++) {
        this.queue.push(this.queue.shift());  // Move front to back.
    }
}

pop() {
    return this.queue.shift();
}

top() {
    return this.queue[0]
}

isEmpty() {
    return this.queue.length === 0;
}

}


let stack = new StackUsingQueue();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.top());   // 30
console.log(stack.pop());   // 30
console.log(stack.top());   // 20
console.log(stack.isEmpty()); // false
class Stack {
    constructor() {
        this.items = [];
    }

 
// Add Element to the top
push(e) {
    this.items.push(e);
} 

// Remove Element and return top element. 
pop() {
    if(this.isEmpty()) return null;
    return this.items.pop();
}

// View top element, without removing.
peek() {
    if(this.isEmpty()) return null;
    return this.items[this.items.length - 1]
}

// check if stack is empty 
isEmpty() {
    return this.items.length === 0;
}

// return the size of the stack
size() {
    return this.items.length;
}

//clear stack
clear() {
    this.items = [];
}

// print stack
print() {
    console.log(this.items.join("<- "));
}

}


const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();         // Output: 10 <- 20 <- 30
console.log(stack.pop());   // Output: 30
console.log(stack.peek());  // Output: 20
console.log(stack.size());  // Output: 2
console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.isEmpty()); // Output: true
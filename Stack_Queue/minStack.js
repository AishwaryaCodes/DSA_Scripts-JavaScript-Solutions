// Min Stack - Push, POP, TOP, GetMin

class MinStack {
    constructor(){
        this.stack = [];
        this.minStack = [];
    }


    push(val) {
        this.stack.push(val);

        const min = this.minStack.length === 0 ? val : Math.min(val, this.minStack[this.minStack.length - 1]);

        this.minStack.push(min);
    }


    pop() {
        this.stack.pop();
        this.minStack.pop();
    }


    top(){
        return this.stack[this.stack.length - 1];
    }


    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}



const minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log("getMin:", minStack.getMin()); // Output: -3
minStack.pop();
console.log("top:", minStack.top());       // Output: 0
console.log("getMin:", minStack.getMin());
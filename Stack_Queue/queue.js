class Queue {
    constructor() {
        this.items = [];
    }

    //Add element to the end
    enQueue(e) {
        this.items.push(e);
    }

    //Remove element and return the front elements
    deQueue() {
        if(this.isEmpty()) return null;
        return this.items.shift();
    }

    //Peek front element without removing
    front() {
        if(this.isEmpty()) return null;
        return this.items[0];
    }

    //Check if queue is empty
    isEmpty() {
       return this.items.length === 0;
    }

    //return the size of the queue
    size() {
       return this.items.length;
    }

    //clear stack
    clear() {
    this.items = [];
    }

    //Print the queue 
    print() {
        console.log(this.items.join(" -> "));
    }

}


const queue = new Queue();

queue.enQueue("A");
queue.enQueue("B");
queue.enQueue("C");

queue.print();            // Output: A -> B -> C
console.log(queue.deQueue());  // Output: A
console.log(queue.front());    // Output: B
console.log(queue.size());     // Output: 2
console.log(queue.isEmpty());  // Output: false

queue.clear();
console.log(queue.isEmpty());  // Output: true

// Merge K Sorted Lists

class Min_Heap {
    constructor() {
        this.data = [];
    }

    size() {
        return this.data.length;
    }

    peek() {
        return this.data[0] ?? null;
    }

    push(node) {
        this.data.push(node);
        this.bubbleUp(this.data.length - 1);
    }

    pop() {
        if(this.size() === 0) return null;

        const min = this.data[0];
        const last = this.data.pop();

        if(this.size() > 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }

        return min;
    }

    bubbleUp(i) {
        while(i > 0) {
            const p = Math.floor((i - 1) / 2);
            if(this.data[p].val <= this.data[i].val) break;
            [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
            i = p;
        }
    }

    bubbleDown(i) {
        const n = this.size();
        while(true) {
            let smallest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if(left < n && this.data[left].val < this.data[smallest].val) smallest = left;

            if(right < n && this.data[right].val < this.data[smallest].val) smallest = right;

            if(smallest === i) break;

            [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];

            i = smallest;
        }
    }

 }


var mergeKLists = function(lists) {

    const heap = new Min_Heap();

    for(const node of lists) {
        if(node !== null) heap.push(node);
    }


    const dummy = new ListNode(0);
    let tail = dummy;

    while(heap.size() > 0) {
        const node = heap.pop();
        tail.next = node;
        tail = node;

        if(node.next !== null) heap.push(node.next);
    }

    tail.next = null;
    return dummy.next;
    
};
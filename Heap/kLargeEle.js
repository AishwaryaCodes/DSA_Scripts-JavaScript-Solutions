//  Kth Largest Element in an Array

 class _Heap {
    constructor(){
        this.data = [];
    }

    size() {
        return this.data.length;
    }

    peek() {
        return this.data[0];
    }

    push(val) {
        this.data.push(val);
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
            if(this.data[p] <= this.data[i]) break;
            [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
            i = p;
        }
    }

    bubbleDown(i) {
        const n = this.size();
        while(true) {
            let smallest = i;
            const l = 2 * i + 1;
            const r = 2 * i + 2;

            if(l < n && this.data[l] < this.data[smallest]) smallest = l;
            if(r < n && this.data[r] < this.data[smallest]) smallest = r;

            if(smallest === i) break;
            [this.data[i], this.data[smallest]] = [this.data[smallest], this.data[i]];
            i = smallest;
         }
    }

 }


var findKthLargest = function(nums, k) {

    const myHeap = new _Heap();

    for(const num of nums) {
        myHeap.push(num);

        if(myHeap.size() > k) myHeap.pop();
    }

    return myHeap.peek();
    
};






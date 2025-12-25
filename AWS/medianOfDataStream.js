// Find Median from Data Stream

class _Heap {
    constructor(compare) {
        this.data = [];
        this.compare = compare;
    }

    size() {
        return this.data.length;
    }

    peek() {
        return this.data[0];
    }

    push(val) {
        this.data.push(val);
        this._bubbleUp(this.data.length - 1);
    }

    _bubbleUp(i) {
        while(i > 0) {
            const p = Math.floor((i - 1) / 2);
            if(this.compare(this.data[i], this.data[p])) {
                [this.data[i], this.data[p]] = [this.data[p], this.data[i]]
                i = p;
            }
            else break; 
        }
    }

    pop() {
        const n = this.data.length;
        if(n === 0) return undefined;
        if(n === 1) return this.data.pop();

        const top = this.data[0];
        this.data[0] = this.data.pop();
        this._bubbleDown(0);
        return top;
    }

    _bubbleDown(i) {
        const n = this.data.length;
        while(true) {
            let best = i;
            const l = 2 * i + 1;
            const r = 2 * i + 2;

            if(l < n && this.compare(this.data[i], this.data[best])) best = l;
            if(r < n && this.compare(this.data[r], this.data[best])) best = r;

            if(best !== i) {
                [this.data[i], this.data[best]] = [this.data[best], this.data[i]];
                i = best;
            }
            else break;
        }
    }
}

var MedianFinder = function() {
    this.low = new _Heap((a, b) => a > b);
    this.high = new _Heap((a, b) => a < b);
};

MedianFinder.prototype.addNum = function(num) {
    if(this.low.size() === 0 || num <= this.low.peek()) this.low.peek(num);
    else this.high.push(num);

    if(this.low.size() > this.high.size() + 1) {
        this.high.push(this.low.pop());
    }
    else if(this.high.size() > this.low.size()) {
        this.low.push(this.high.pop());
    }
};

MedianFinder.prototype.findMedian = function() {
    if(this.low.size() === this.high.size()) {
        return (this.low.peek() + this.high.peek()) / 2;
    }

    return this.low.peek();
};
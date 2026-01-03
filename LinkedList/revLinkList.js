// Reverse LinkedList

function arrayToLinkedList(arr) {
    let dummy = new ListNode(0);
    let curr = dummy;

    for (let val of arr) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }

    return dummy.next;
}



function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function rev(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
}


let arr = [1,2,3,4,5];
let head = arrayToLinkedList(arr);

let reversedHead = rev(head);
console.log(reversedHead);
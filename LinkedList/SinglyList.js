class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;

        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head)
            return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;

    }
    shift() {
        if (!this.head)
            return undefined;
        let headToBeRemoved = this.head;
        this.head = headToBeRemoved.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }

        return headToBeRemoved
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let temp = this.head
         for(let i = 0 ; i < index; i++) {
             temp = temp.next
         }
        return temp;
    }

   



}
let list = new SinglyLinkedList()
list.push("Hello")

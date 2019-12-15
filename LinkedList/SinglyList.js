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
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true
        }
        return false
    }


    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(val);
        if (index === 0) return this.unshift(val);
        else {
            let firstNode = this.get(index - 1)
            let newMiddleNode = new Node(val)
            let lastNode = firstNode.next
            firstNode.next = newMiddleNode
            newMiddleNode.next = lastNode
        }
        this.length++
        return true

    }
    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        let firstNode = this.get(index - 1);
        let removed = firstNode.next
        firstNode.next = removed.next
        this.length--;
        return removed;
    }
    // reverse() {
    //     let currentNode = this.head;
    //     this.head = this.tail;
    //     this.tail = currentNode;
    //     let prev = null;
    //     let next;
    // for(let i = 0;i < this.length; i++) {
    //      next = currentNode.next;
    //      currentNode.next = prev;
    //      prev = currentNode;
    //      currentNode = next
    // }
    // return this;

    // }
    reverse() {
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        let prevNode = null;
        let nextNode;
        for(let i = 0; i < this.length; i++){
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        return this

    }















}
let list = new SinglyLinkedList()
list.push("Hello")

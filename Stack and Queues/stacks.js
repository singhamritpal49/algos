class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let oldFirst = this.first;
            this.first = newNode;
            this.first.next = oldFirst;
        }
        this.size++;
        return this
    }
    pop() {
        if (!this.first)
            return null;
        let oldFirst = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = oldFirst.next
        this.size--;
        return oldFirst.value
    }

}
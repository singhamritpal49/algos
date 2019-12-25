class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null; 
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left
                    }
                }
                else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }
    find(value) {
        if (!this.root)
            return false;
        let current = this.root;
        while (true) {
            if (value === current.value)
                return true;
            if (value < current.value) {
                if (current.left) {
                    current = current.left;
                } else {
                    return false;
                }

            } else if (value > current.value) {
                if (current.right) {
                    current = current.right;
                } else {
                    return false
                }
            }
        }
    }
    remove(value) {

    }

}



let tree = new BinarySearchTree();

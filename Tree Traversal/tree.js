class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
   

    BFS() {
        let currentNode = this.root;
        let queue = [];
        let data = [];
            queue.push(currentNode)
        while(queue.length) {
            currentNode = queue.shift();
            data.push(currentNode.value);
            if(currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right);
        }
        return data
    }
    DFSPreOrder() {
        //LRN   Node --> Left --> Right 
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root)
        return data;
    }
    DFSPostOrder() {
        //LRN  Left --> Right --> Node
        let data = [];

        function postTraverse(node) {
            if (node.left)
                postTraverse(node.left);
            if (node.right)
                postTraverse(node.right);
            data.push(node.value)

        }
        postTraverse(this.root);
        return data;
    }
    DFSInOrder() {
        //LNR  Left --> Node --> Right
        let data = [];
        function inTraverse(node) {
            if (node.left)
                inTraverse(node.left);
            data.push(node.value)
            if (node.right)
                inTraverse(node.right);
        }
        inTraverse(this.root);
        return data;
    }
}


var tree = new Tree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.BFS();

    


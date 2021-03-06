class Stack {
    constructor() {
      this.stack = []
      // setup some built in data type
      // holds the stack
    }
    push( value ) {
      // Put value onto the stack
      this.stack.push(value)
      return this
    }
    pop() {
      this.stack.pop()
      return this.stack
      // remove the the value at the top of the stack
      // and return it
    }
    peek() {
      // return the value at the top of the stck
      // but do not remove it from the stack
      return this.stack[this.stack.length-1]
    }
    increment(counter,add) {
      for(let i = 0 ; i < counter; i++){
        this.stack[i] += add
      }
      return this.stack
    }




  }
  let stack = new Stack()
  stack.push(4)
  stack.push(6)
  stack.push(1)
  // [4,6,1]
  // increment(2,2)
  // [6, 8, 1]
  // increment(2,2)
  // [8, 10, 1] =>
  //1
  //10
  //8
  
  // Operation is an of ops
function superStack(operation) {
  let stack = new Stack()
  operationsplice(1,0) 
  for(let op of operation) {
    if(op.substring(0,3), "pop") {
      stack.pop()
      stack.peek()
    }
    else if (op.substring(0,4) === 'push') {
      stack.push(parseInt(op.substring(5)))
      stack.peek()
    }
    else if (op.substring(0,3) === "inc"){
      let spaceIndex = op.indexOf(" ")
      let secondPart = op.substring(spaceIndex+1);
      let secondSpace = secondPart.indexOf(" ")+ 2 + spaceIndex

      let fArg = parseInt(op.substring(spaceIndex+1, secondSpace))
      let sArg = parseInt(op.substring(secondSpace))
      stack.increment(fArg,sArg)
      stack.peek()
    }
    else return 
  }
}
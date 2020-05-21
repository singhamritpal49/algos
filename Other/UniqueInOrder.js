var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an arrawfdsy
    // Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
    if(!Array.isArray(iterable)){
    iterable=iterable.split("")
    }
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] === iterable[i + 1]) {
        iterable.splice(i, 1)
        i--
      }
    }
      return iterable
  }


//   Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
  

// Another Solution

function uniqueInOrder(iterable) {
    let array = [];
    
    for(let i = 0; i < iterable.length;i++) {
      let lastElement = array[array.length - 1];
      if(lastElement !== iterable[i]) {
          array.push(iterable[i])
      }
    }
    
      return array;
      
    }
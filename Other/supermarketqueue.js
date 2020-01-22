function queueTime(customers, n) {
  if (customers.length ===0) return 0
  if (customers.length === 1 ) return customers[0]
  if (customers.length <= n) return findMax(customers)
  if (n===1)return sum(customers) 
  let arr = new Array(n)
  for(let i=0; i<= customers.length-1; i++){
    if(!arr[i] && arr.length > i){
    arr[i]=customers[i]
    }
    else{
    arr[findMin(arr)] =  arr[findMin(arr)]  + customers[i]
    }
  }
  return findMax(arr)
}
function findMax(array) {
  let maxNumber = 0
  for(let i = 0; i < array.length ;i++) {
   if (array[i]>maxNumber){
    maxNumber = array[i]
    }
  }
  return maxNumber
}
function sum(array) {
  let sumOfArray = 0
  for(let i = 0; i < array.length ;i++) {
    sumOfArray += array[i]
  }
  return sumOfArray
}
function findMin(array) {
  let maxNumber = Infinity;
  let index = null;
  for(let i = 0; i < array.length ;i++) {
   if (array[i]<maxNumber){
    maxNumber = array[i]
    index = i
    }
  }
  return index
}
//   There is a queue for the self-checkout tills at the supermarket. 
// Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)


// Given a list of numbers and a number k, 
// return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function problemOne(array,num) {
    for(let i = 0; i < array.length;i++) {
       for(let j = i+1 ; j < array.length;j++) {
           if((array[i] + array[j]) === num) { 
                    return true;
           } 
       }
    }
return false;
}



// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.


function moveZeroes(nums) {
    let array = []
for(let i = 0; i < nums.length;i++) {
    if(nums[i] === 0) {
        array.push(nums[i])
        nums.splice(i,1)
    }   
}

for(let i = 0; i <= array.length;i++) {
    let first = array.pop()
        nums.push(first)
}
return nums;
}
// Stairway To Heaven
// Given a list of integers nums, for each element, add its index to its value and return the new list.

// For example, given the list [5, 3, 7], return [5, 4, 9] since it's [5 + 0, 3 + 1, 7 + 2].

// Example 1
// Input

// nums = [5, 3, 7]
// Output

// [5, 4, 9]


    function solve(nums) {
        // Write your code here
        //
    let result = []
    for(let i = 0; i < nums.length;i++) {
        result.push(nums[i]+i)
    }
    return result
    }
    


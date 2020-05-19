// Binary Search
// Given a sorted array arr[] of n elements, write a function to search a given element x in arr[].
// A simple approach is to do linear search.The time complexity of above algorithm is O(n). Another approach to perform the same task is using Binary Search.

// Binary Search: Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.





// The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).

// Recommended: Please solve it on “PRACTICE ” first, before moving on to the solution.
// We basically ignore half of the elements just after one comparison.

// Compare x with the middle element.
// If x matches with middle element, we return the mid index.
// Else If x is greater than the mid element, then x can only lie in right half subarray after the mid element. So we recur for right half.
// Else (x is smaller) recur for the left half.

function binarySearch(array,item) {
    //     [1,2,3,5,6,9,12,19]
    //      l       m       r
            let leftIndex = 0;
            let rightIndex = array.length -1;
           while(leftIndex <= rightIndex) {
               let midPointIndex = Math.floor((leftIndex+rightIndex)/2)
               let midPointValue = array[midPointIndex];
               if(item === midPointValue) return midPointIndex;
               else if(item < midPointValue) rightIndex = midPointIndex - 1;
               else leftIndex = midPointIndex + 1;
           }
           return -1;
    }
// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]





function sortArray(array) {
    const oddArr = [];
    const evenArr = [];
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenArr.push(array[i]);
        } else {
            oddArr.push(array[i]);
        }
    }
    oddArr.sort((a,b)=>a - b);

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(evenArr.shift());
        } else {
            result.push(oddArr.shift());
        }
    }
    return result;
}
sortArray([5, 3, 2, 8, 1, 4])

// When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

// Description:
// Give an 2D integer array arr that contains some integers. Array arr has the following properties:

// Integers in each row are sorted from left to right.

// Integers in each column are sorted from up to bottom.

// No duplicate integers in each row or column. For example:

// arr = [
// [1, 3, 5, 7],
// [2, 4, 7, 8],
// [3, 5, 9, 10]
// ]


function countNumber(array, num) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j])
            if (array[i][j] === num) {
                count++
            }
        }
    }
    return count;
}
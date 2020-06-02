// Given a string s, eliminate consecutive duplicate characters from the string and return it.

// Basically, if a list contains repeated character they should be replaced with a single copy of the character. The order of the elements should not be changed.

// Constraints

// Length of s is at most 5000.
// Example 1
// Input

// s = "aaaaaabbbccccaaaaddf"
// Output

// "abcadf"
// Example 2
// Input

// s = "a"
// Output

// "a"

function solve(s) {
    // Write your code here
    // loop through
    let string  = [];   
    for(let i = 0; i < s.length;i++) {
    let lastElement = string.length - 1;
        if(string[lastElement] !== s[i]) {
            string.push(s[i])
        }    
    }
    return string.join('')
    
}
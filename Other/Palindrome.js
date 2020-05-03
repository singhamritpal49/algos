// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome.

// Examples
// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false


function isPalindrome(line) {
    let newLine = line.toString().split('');
    let length = newLine.length-1;
    let result = true;
    for (let i = 0; i < newLine.length; i++) {
            if(newLine[i] === newLine[length]) {
                
                result = true
            }
            if(newLine[i] != newLine[length]) {
                result = false
            }
            length--
     }
return result;
}


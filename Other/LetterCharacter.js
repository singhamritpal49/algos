// Letter Changes
// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
// Examples
// Input: "hello*3"
// Output: Ifmmp*3
// Input: "fun times!"
// Output: gvO Ujnft!


function LetterChanges(str) { 
    str = str.split('')
    let string = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (str[i] === string[j]) {
                str[i] = string[j + 1]
                break;
            }

        }
        if (str[i] === "a" || str[i] === "e" || str[i] === 'i' || str[i] === 'o' || str[i] === "u") {
            str[i] = str[i].toUpperCase()
        }
    }
    // code goes here
    return str.join('');


}



function LetterChanges(str) {
    str = str.split('')
    let string = "abcdefghijklmnopqrtuwzyza"

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (str[i] === string[j]) {
                str[i] = string[j + 1]
                break;
            }

        }
        if (str[i] === "a" || str[i] === "e" || str[i] === 'i' || str[i] === 'o' || str[i] === "u") {
            str[i] = str[i].toUpperCase()
        }
    }
    // code goes here
    return str.join('');

}
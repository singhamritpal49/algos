// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


function toCamelCase(words) {
    let str = words.split('')
    let result = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "_" || str[i] === "-") {

            str[i + 1] = str[i + 1].toUpperCase()
            str.splice(i,1)

        }
    }
    return str.join("")
}
// In this kata you are required to, given a string, 
// replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.


function alphabetPosition(text) { 
    let result = []
    let value;
for(let i = 0; i < text.length; i++) {
     value = text[i].toLowerCase().charCodeAt() - 96
         if (value > 0 && value <= 26) {                   
                result.push(value)
         }
}
return result.join(" ");
}


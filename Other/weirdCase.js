function toWeirdCase1(string) {
    // Weird string case -->  WeIrD StRiNg CaSe
    // String ---> StRiNg
    let words = string.split('')
    let result = []
    for (let i = 0; i < words.length; i++) {
        
        if (i % 2 === 0) {
           result.push(words[i].toUpperCase())
        }
        else {
           result.push(words[i])
        }
    }
    return result.join('')
}

function toWeirdCase(string) {
    let words = string.split(" ")
    let result = []
    for(let i = 0; i < words.length; i++) {
        
        result.push(toWeirdCase1(words[i]))
    }
    return result.join(" ")
}

toWeirdCase("Just Kidding")
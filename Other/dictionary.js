// Example : autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']


function autocomplete(input, dictionary) {
    let result = []
    for (let i = 0; i < dictionary.length; i++) {
        let eachWord = dictionary[i]

        if (input === eachWord) {
            result.push(eachWord)
        }
//         console.log(dictionary[i])
        for (let j = 0; j < eachWord.length; j++) {
            if (input === eachWord[j]) {
                result.push(eachWord)
            }
            if (input === (eachWord[j] + eachWord[j + 1])) {
                result.push(eachWord)
            }
            if (input === (eachWord[j] + eachWord[j + 1] + eachWord[j + 2])) {
                result.push(eachWord)
            }

            if (input === (eachWord[j] + eachWord[j + 1] + eachWord[j + 2] + eachWord[j + 3])) {
                result.push(eachWord)
            }
            
            


        }

    }
    return result
}

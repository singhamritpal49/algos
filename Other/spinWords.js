function spinWords(words) {
//     Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter words 
// reversed (Just like the name of this Kata). Strings passed in will 
// consist of only letters and spaces. Spaces will be included only when
//  more than one word is present.
// ------------------------------------------------------------------------
    //   spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
    //   spinWords( "This is a test") => returns "This is a test" 
    //   spinWords( "This is another test" )=> returns "This is rehtona test
    // STEPS
    // Take the words and convert to array
    // Iteratre over the array


    let array = words.split(" ")
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].toString().length >= 5) {
            result.push(array[i].split("").reverse().join(""))
        } 
        if (array[i].toString().length < 5) {
            result.push(array[i])
        }

    }
    return result.join(' ')
}

spinWords("Hey fellow warriors")
spinWords("Just kidding there is still one more")

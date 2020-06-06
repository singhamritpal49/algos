function autocomplete(input, dictionary){
    return dictionary.filter( word => {
      return word.includes(input) 
    })
}
function balance(string) {

    // WHEN  MISSING ANY right or left Parentheses  () () ) ()
    // Find how many Parentheses needed to complete the pair
    let hash = {};
    for(let i = 0; i < string.length; i++) {
        hash[string[i]] = (hash[string[i]] || 0) + 1
    }
        const values = Object.values(hash)
    
    for(let i = 0; i <values.length;i++) {
        if (values[i] > values[i+1]) {
               let value = values[i] - values[i+1]
               return value
        } 
        else if (values[i+1] > values[i]) {
               let value = values[i+1] - values[i]
               return value
        } else if(values[i] = values[i+1]) {
            return 0
        }


    }


}

console.log(balance("())()"))
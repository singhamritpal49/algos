// The main idea is to count all the occurring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }


function count (string) {  
    // The function code should be here
      let hashMap =  {}
            for(let i = 0; i < string.length;i++) {
              hashMap[string[i]] = (hashMap[string[i]] || 0 ) + 1
            }
     return hashMap
  }
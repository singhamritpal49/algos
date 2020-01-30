function validatePIN (pin) {
    //return true or false
    // ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

    // If the function is passed a valid PIN string, return true, else return false.
    
    // eg:
    
    // validatePIN("1234") === true
    // validatePIN("12345") === false
    // validatePIN("a234") === false
    
    for(let i = 0; i < pin.length; i++ ) {
          if (pin[i] === "-") {
              return false
          }
          if (pin[i] === "") {
              return false
          }
          if (pin[i] === ".") {
              return false
          }
          if (isNaN(pin[i])) {
              return false            
          }  
          if (pin.length < 4) {
              return false
          }
          if(pin.length > 6) {
              return false
          }
          if (pin.length > 4 && pin.length < 6) {
              return false
          }
  
  
                
          
          return true
    }
  }
  console.log(validatePIN("2342-"))
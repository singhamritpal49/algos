function validParenthese(s) {
    abc = {}
    for(let i=0; i<s.length ; i++){
        abc[s[i]] = (abc[s[i]] || 0) +1
    }
    if(abc["("] !== abc[")"]) return false
    if(abc["["] !== abc["]"]) return false
    if(abc["{"] !== abc["}"]) return false
    
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(" || s[i]==="{" || s[i] ==="["){
            stack.push(s[i])
        }
        else if (s[i] === ")"){
          if(stack.pop() !== "(") return false
        }
        
        else if(s[i] === "}"){
            if(stack.pop() !== "{") return false
        }
        else if(s[i] === "]"){
            if(stack.pop() !== "[") return false
        }
    }

    return true    
};




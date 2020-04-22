function validParenthese(s) {
    if(s.length % 2 != 0) return false;
    abc = {}
    for(let i=0; i<s.length ; i++){
        abc[s[i]] = (abc[s[i]] || 0) +1
    }
    if(abc["("] !== abc[")"]) return false
    if(abc["["] !== abc["]"]) return false
    if(abc["{"] !== abc["}"]) return false

  
    return abc
};







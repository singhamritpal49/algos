function sol(str) {
    let hashTable = {};
    for(let i = 0; i < str.length;i++) {
        hashTable[str[i]] = (hashTable[str[i]] || 0) + 1 
            if(hashTable[str[i]] > 1)
             return str[i];
    }
    return -1;
}
function find(array) {

    let obj = {};

    let count = 0;
    for(let i = 0; i < array.length;i++) {
        obj[array[i]] = (obj[array[i]] || 0) + 1
        
//         console.log(obj)
    }
    for(let i in obj) {
        if (count < obj[i]) {
            count = i
        }
        console.log("Key " + i, "Value " + obj[i])
    }
//     let count = Object.values(obj);
//      let maXcount = Math.max(...count)
    return count;
        
}
find([1,3,1,2,3,1])
 
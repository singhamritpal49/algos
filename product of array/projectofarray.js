function productOfArray(array) {
    let count = 1


    function product(arr){
    for(let i = 0; i < arr.length; i++) {
        count *= arr[i]
     }
    }
    product(array)

       return count
}

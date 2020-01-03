function common_element(array1, array2) {
    // [1,3,4,6,7,9],
    // [1,2,4,5,9,10]
    //result [1,4,9] common element
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                if (!result.includes(array1[i])) {
                    result.push(array1[i])
                }
            }
        }
    }

    return result;

}

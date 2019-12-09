function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let mini = i
        console.log(array)

        for (let j =  i + 1; j < array.length; j++) {
                if (array[j] < array[mini]) {
                    mini = j
     
                }
        }
        let temp = array[i]
            array[i] = array[mini]
            array[mini] = temp
            

    }
    return array
}
selectionSort([21,4,6,1,5])

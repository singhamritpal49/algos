class MaxBinaryHeap {
    constructor() {
        this.values = [40, 39, 33, 18, 27, 12];
      
    }

    insert(element) {
        this.values.push(element)
        this.bubbleUp()

    }
}
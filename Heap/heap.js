class MaxBinaryHeap {
    constructor() {
        this.values = [40, 39, 33, 18, 27, 12];
      
    }

    insert(element) {
        this.values.push(element)
        this.bubbleUp()

    }
    bubbleUp() {
        let lastIndex = this.values.length - 1
        let lastIndexElement = this.values[lastIndex]
        while (lastIndex=>0) {
            let parentIndex = Math.floor((lastIndex - 1) / 2)
            let parentIndexElement = this.values[parentIndex]
            if (lastIndexElement > parentIndexElement) {
                this.values[parentIndex] = lastIndexElement;
                this.values[lastIndex] = parentIndexElement;
                lastIndex = parentIndex
            } else {
                break
            }
        }
    }
    remove() {
        const max = this.values[0]
        const end = this.values.pop();
        this.values[0] = end
        return max
    }

}
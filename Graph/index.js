class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        }



}
g = new Graph();
g.addVertex("Tokyo")
g.addVertex("Dallas")
g.addVertex("Aspen")

g.addEdge("Dallas", "Tokyo")
g.addEdge("Aspen", "Dallas")

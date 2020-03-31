class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        
    }

}
g = new Graph();
g.addVertex("Tokyo")
g.addVertex("Dallas")
g.addVertex("Aspen")

g.addEdge("Dallas", "Tokyo")
g.addEdge("Aspen", "Dallas")

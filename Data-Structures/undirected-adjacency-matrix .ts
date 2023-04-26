interface IUndirectedAdjacencyMatrix<T> {
    nodes: T[];
    matrix: number[][];
    addEdge(from: number, to: number, weight: number): void;
    removeEdge(from: number, to: number): void;
    getNodeValue(nodeIndex: number): T;
    setNodeValue(nodeIndex: number, value: T): void;
    addNode(value: T): void;
    removeNode(nodeIndex: number): void;

    /** used for debug visualizer in VSC (ex. id: hediet.debug-visualizer) */
    fromStringToObject(): object;
  }
  
  class UndirectedAdjacencyMatrix<T> implements IUndirectedAdjacencyMatrix<T> {
    nodes: T[];
    matrix: number[][];
  
    constructor(nodes: T[]) {
      this.nodes = nodes;
      this.matrix = Array.from({ length: nodes.length }, () =>
        Array.from({ length: nodes.length }, () => 0)
      );
    }
  
    addEdge(from: number, to: number, weight: number) {
      this.matrix[from][to] = weight;
      this.matrix[to][from] = weight;
    }
  
    removeEdge(from: number, to: number) {
      this.matrix[from][to] = 0;
      this.matrix[to][from] = 0;
    }
  
    getNodeValue(nodeIndex: number): T {
      return this.nodes[nodeIndex];
    }
  
    setNodeValue(nodeIndex: number, value: T) {
      this.nodes[nodeIndex] = value;
    }
  
    addNode(value: T) {
      this.nodes.push(value);
      const newLength = this.nodes.length;
      this.matrix.forEach((row) => row.push(0));
      this.matrix.push(new Array(newLength).fill(0));
    }
  
    removeNode(nodeIndex: number) {
      this.nodes.splice(nodeIndex, 1);
      this.matrix.splice(nodeIndex, 1);
      this.matrix.forEach((row) => row.splice(nodeIndex, 1));
    }

    DFS(start: number, visited: T[] | null) {
      if(visited == null) visited = [];
   
      // set current node as visited
      visited.push(this.nodes[start]);
   
      // for every node of the graph
      for (let i = 0; i < this.matrix[start].length; i++) {
        // if some node is adjacent to the current node
        // and it has not already been visited
        if (this.matrix[start][i] === 1 && !visited.includes(this.nodes[i])) {
          this.DFS(i, visited);
        }
      }

      return visited;
    }

    toString(){
      let objString: any = {};

      objString.kind = { "graph": true };

      objString.nodes = this.nodes.map((x, xi) => {
          return { id: xi.toString(), label: x}
      });
      
      objString.edges = []
      this.matrix.forEach((x, xi) => {
          x.forEach((y, yi) => {   

            // only bi-directional edges
            if(y > 0){
              objString.edges.push({
                "from": xi.toString(), "to": yi.toString()
              });
            };

          });
        });

      return JSON.stringify(objString);
    }

    fromStringToObject(){
      return JSON.parse(this.toString())
    }
  }
  
  // Example usage:
  const graph = new UndirectedAdjacencyMatrix<string>(["A", "B", "C"]);
  graph.addEdge(0, 1, 1);
  graph.addEdge(1, 2, 1);
  graph.addNode("D");
  graph.addEdge(0, 3, 1);
  graph.addEdge(1, 3, 1);
  // graph.removeNode(1);
  var dfsres = graph.DFS(1, null);

  console.log(graph);

  // console.log(graph.matrix);
  // console.log(graph.nodes); // ["A", "B", "C"]
  

// Basic graph //
//
// A <-> B
// B <-> C

// how to format to use the visual studio code in editor interactive graph view extension
// The toString and FromStringToObject methods format for this plugin
//
// link: https://addyosmani.com/blog/visualize-data-structures-vscode/
//
// const example = {
//   "kind": { "graph": true },
//   "nodes": [
//     { "id": "0", "label": "A" },
//     { "id": "1", "label": "B" },
//     { "id": "2", "label": "C" }
//   ],
//   "edges": [
//     { "from": "0", "to": "1" },
//     { "from": "1", "to": "0" },
//     { "from": "1", "to": "2" },
//     { "from": "2", "to": "1" }
//   ]
// }
 

export { 
    IUndirectedAdjacencyMatrix,
    UndirectedAdjacencyMatrix
};
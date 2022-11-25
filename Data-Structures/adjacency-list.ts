// The Node variation increases memory and ignores some builtin features of the language
// but provides extensibility in a strict oop paradigm 


/** 
 * Adjacency List Node for an Unweighted, Undirected graph.
 */
class Node<T> {
    value: T;
    adjacencies: Node<T>[];

    constructor(value: T, adjacencies = null) {
      this.value = value;
      this.adjacencies = adjacencies ?? []; // adjacency list
    }
  
    addAdjacent(node: Node<T>) {
      this.adjacencies.push(node);
    }
  
    removeAdjacent(node: Node<T>) {
      const index = this.adjacencies.indexOf(node);
      if(index > -1) {
        this.adjacencies.splice(index, 1);
        return node;
      }
    }
  
    getAdjacents() {
      return this.adjacencies;
    }
  
    isAdjacent(node: Node<T>) {
      return this.adjacencies.indexOf(node) > -1;
    }
  }


/**
 * Unweighted, Undirected
 */
  class AdjacencyList<T> {
    graph: Node<T>[];

    constructor() {
        this.graph = [];
    }

    addNode(node: Node<T>): void {
        this.graph.push(node);
    }

    addEdge(root: Node<T>, newEdge: Node<T>){
      root.addAdjacent(newEdge);
    }

    addNodeOrEdge(node: Node<T>, parentNode: Node<T>|null = null): void {
      if(parentNode === null) this.graph.push(node);
      else {
          this.graph.find(x => x === parentNode)?.addAdjacent(node);
      }
  }

    BFS(find: T): Node<T> | null {
      let found: Node<T> | null = null;
      this.graph.forEach(x => {
          if(x.value === find) found = x
          if(found !== null) return found

          x.adjacencies.forEach(y => {
              if(y.value === find) found = y;
              if(found !== null) return found
          })
      })

      return found;
    }

    printBFS(): void {
        let queue = new Map();

        this.graph.forEach(x => {
            if(!queue.has(x.value)) queue.set(x.value, x)

            x.adjacencies.forEach(y => {
                if(!queue.has(y.value)) queue.set(y.value, y)
            })
        })

        // display
        for (let i of queue.values()){
          console.log(i)
      }
    }

    printDFS(): void {
      let visited: Node<T>[] = []; // stack of visited nodes

      this.graph.forEach(x => {
        recurse(x)
      })

      function recurse(node: Node<T>){
        if(!visited.includes(node)) visited.unshift(node);
          node.adjacencies.forEach(x => {
            if(!visited.includes(x)) {
              recurse(x)
            }
          })
      }
      
      // display
      visited.forEach(x => console.log(x))
    }
  }

  // Our Graph
  //   1
  //  / \
  // |   2
  // 4    \
  //  \____3
  //       |
  //       5

  // Our Graph
  // 1 -> 2, 4
  // 2 -> 1, 3
  // 3 -> 4, 5
  // 4 -> 1, 3
  // 5 -> 3
  var aj = new AdjacencyList<number>();

  var n1 = new Node<number>(1)
  var n2 = new Node<number>(2)
  var n3 = new Node<number>(3)
  var n4 = new Node<number>(4)
  var n5 = new Node<number>(5)

  aj.addNode(n1)
  aj.addNode(n2)
  aj.addNode(n3)
  aj.addNode(n4)
  aj.addNode(n5)

  //1
  aj.graph[0].addAdjacent(n2) // 1 -> 2
  aj.graph[0].addAdjacent(n4) // 1 -> 4
  //2
  aj.graph[1].addAdjacent(n1) // 2 -> 1
  aj.graph[1].addAdjacent(n3) // 2 -> 3
  //3
  aj.graph[2].addAdjacent(n2) 
  aj.graph[2].addAdjacent(n5)
  aj.graph[2].addAdjacent(n4)
  
  //4
  aj.graph[3].addAdjacent(n1)
  aj.graph[3].addAdjacent(n3)
  //5
  aj.graph[4].addAdjacent(n3)

  // aj.printBFS();
  // aj.printDFS();

  var node = aj.BFS(4)
  console.log(node)

export default AdjacencyList;
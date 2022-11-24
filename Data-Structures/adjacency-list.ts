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


// Main Class
  class AdjacencyList<T> {
    graph: Node<T>[];

    constructor() {
        this.graph = [];
    }

    addNode(node: Node<T>, parentNode: Node<T>|null = null): void {
        if(parentNode === null) this.graph.push(node);
        else {
            this.graph.find(x => x === parentNode)?.addAdjacent(node);
        }
    }

    printBFS(): void {
        let queue = new Map();

        this.graph.forEach(x => {
            if(!queue.has(x.value)) queue.set(x.value, x)

            x.adjacencies.forEach(y => {
                if(!queue.has(y.value)) queue.set(y.value, y)
            })
        })

        for (let i of queue.values()){
          console.log(i)
      }
    }

    printDFS(): void {
      let stack: Node<T>[] = [];

      function recurse(node: Node<T>){
        if(node.adjacencies.length !== 0){
          node.adjacencies.forEach(x => recurse(x))
        }
        if(!stack.includes(node)) stack.unshift(node)
      }
      recurse(this.graph[0])

      stack.forEach(x => console.log(x))
    }
  }

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
  aj.graph[0].addAdjacent(n2);
  aj.graph[0].addAdjacent(n4);
  //2
  aj.graph[1].addAdjacent(n3)
  //3
  aj.graph[2].addAdjacent(n2)
  aj.graph[2].addAdjacent(n4)
  aj.graph[2].addAdjacent(n5)
  //4
  aj.graph[3].addAdjacent(n1)
  aj.graph[3].addAdjacent(n3)
  //5
  aj.graph[4].addAdjacent(n3)

  aj.printBFS();

export default AdjacencyList;
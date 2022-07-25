/*

 # Definition
    - A priority data store of oldest added items and explicit order number. "First In First Out"
      Add and remove items according to what ever is first.
      
 # Pseudocode
    - Create Class of a Queue object structure
    - Init queue array
    - create methods for mutation of queue (enqueue, dequeue)
    - create methods for viewing queue (print, front, isEmpty, size)
*/

// TODO - convert to TS


/**
 * Top-Down data store for recently added and removed, Last one in, Is First one out
 * @class init new empty array
 */
 function PriorityQueue<T>(this: any) {
    this.collection = [];
  
    this.print = function() {
      console.log(...this.collection);
    };
    /** removes and returns top item data */ 
    this.dequeue = function(){
        const temp = this.collection.splice(0, 1);
        return temp[0][0]
    }
  
    /** adds item to the bottom 
     * @param item - new item to add */ 
    this.enqueue = function(item: [T, number]){
        if(this.isEmpty()) {this.collection.unshift(item)}

        // start from end of the queue, traverse backwards to front
        else{
            for(let i = this.size() - 1; i >= 0; i--){
                if(this.collection[i][1] <= item[1]){
                    return this.collection.splice(i+1, 0, item);
                }
            }
            this.collection.unshift(item);
        }
    }
  
    /** returns top item data */ 
    this.front = function(){ // aka peek
        return this.collection[0][0]
    }
  
    /** checks if empty */ 
    this.isEmpty = function(){
      if(this.collection.length === 0){
        return true
      }
      return false
    }
  
    /** clears all items in the stack */
    this.size = function(){
      return this.collection.length
    }
  }

module.exports = PriorityQueue;

let myQueue =  new (PriorityQueue as any)();
myQueue.enqueue(["first Friend", 3])
myQueue.enqueue(["first four", 4])
myQueue.enqueue(["sev", 7])
myQueue.enqueue(["there", 2])
myQueue.enqueue(["hi", 1])
myQueue.enqueue(["nien", 9])
myQueue.enqueue(["four", 4])
myQueue.enqueue(["friend", 3])
myQueue.print();
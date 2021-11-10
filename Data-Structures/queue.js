/*

 # Definition
    - A priority data store of most oldest added items. "First In First Out"
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
 function Queue() {
  let collection = [];

  this.print = function() {
    console.log(collection);
  };
  /** removes and returns top item */ 
  this.dequeue = function(){
      const temp = collection.splice(0, 1);
      return temp[0]
  }

  /** adds item to top 
   * @param item - new item to add */ 
  this.enqueue = function(item){
      collection.push(item)
  }

  /** returns top item */ 
  this.front = function(){
      return collection[0]
  }

  /** checks if empty */ 
  this.isEmpty = function(){
    if(collection.length === 0){
      return true
    }
    return false
  }

  /** clears all items in the stack */
  this.size = function(){
    return collection.length
  }
}

let myStack = new Queue();
myStack.enqueue("hi")
myStack.enqueue("there")
myStack.enqueue("friend")
myStack.print();
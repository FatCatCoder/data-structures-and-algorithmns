/*

 # Definition
    - A top-down data store of most recently added items. "Last In First Out"
      Add and remove items according to what ever is on top.
      
 # Pseudocode
    - Create Class of a Stack object structure
    - Init stack array
    - create methods for mutation of stack (push, pop, clear)
    - create methods for viewing stack (print, peek, isEmpty)
*/

// TODO - convert to TS


/**
 * Top-Down data store for recently added and removed, Last one in, Is First one out
 * @class init new empty array
 */
function Stack(this: any) {
    let collection: any = [];

    this.print = function() {
      console.log(collection);
    };
    /** removes and returns top item */ 
    this.pop = function(): any{
        const temp = collection.splice(collection.length - 1, 1);
        return temp[0]
    }

    /** adds item to top 
     * @param item - new item to add */ 
    this.push = function(item: any){
        collection.push(item)
    }

    /** returns top item */ 
    this.peek = function(): any[] {
        return collection[collection.length - 1]
    }

    /** checks if empty */ 
    this.isEmpty = function(): boolean {
      if(collection.length === 0){
        return true
      }
      return false
    }

    /** clears all items in the stack */
    this.clear = function(): void {
      collection = [];
    }
}

export { Stack }
module.exports = Stack;

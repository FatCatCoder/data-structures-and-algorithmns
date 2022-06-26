class LinkedListNode<T> {
    public value: T;
    public next : LinkedListNode<T> | null | undefined;

  constructor(value: T, next: LinkedListNode<T> | null | undefined = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Chained Ordered list of items where each node contains reference to the next node.
 * @head get list
 * @size list length
 * @isEmpty boolean
 * @indexOf returns index of given element or -1
 * @elementAt find element @ index or undefined
 * @insert element append to the end
 * @removeAt removes element @ index, If only one item in the list removes that node and returns the element
 * @insertAt add (index, element) does not overwrite existing nodes
 * @remove delete given element
 * @removeAt delete node at given index
 */

class LinkedList<T> {
  private _head: LinkedListNode<T> | null | undefined;
  private _length: number;

  constructor(initData: T | null = null){
    this._head = initData != null? new LinkedListNode<T>(initData): null;
    this._length = initData != null? 1: 0;
  }

  head = () => this._head;
  size = () => this._length;
  isEmpty = () => this.size() === 0;

  /** @param element - append to the end */
  insert = (element: T) => {
    const node = new LinkedListNode<T>(element);
    if (this.head()) {
      let current = this._head;
      while (current?.next !== null) {
        current = current?.next;
      }
      current.next = node;
    }
    else {
      this._head = node;
    }
    this._length++;
  };

  insertAt(index: number, newElement: T){
    if(index >= this.size() || index < 0) {return false} // catch out of range

    this._length++ // increment length

    // head replace
    if(index === 0){ 
      let chain = this._head;
      this._head = new LinkedListNode<T>(newElement);
      this._head.next = chain;
      return true;
    }

    let indexPosition = 0;
    let prevNode = this._head;

    // loop
    const recursion = (deepNode: LinkedListNode<T> | null | undefined): boolean => {
      if(indexPosition === index){ // set new node to preNode's ref, set newNode's ref to old node (ie deepNode)
        let chain = deepNode;
        let newChain = new LinkedListNode<T>(newElement); // swap
        prevNode!.next = newChain;
        newChain.next = chain;
        return true
      }

      indexPosition++;
      prevNode = deepNode;
      return recursion(deepNode?.next)
    }

    return recursion(this._head);
  }

  /** @param findElem - element to find index of or -1 if not found */
  indexOf(findElem: T){
    if(this.isEmpty()) return -1 // catch out of range

    let index = 0;
    const recursion = (deepElement: LinkedListNode<T> | null | undefined): number => {
      if(deepElement?.value === findElem) return index;
      else if(deepElement?.value === null) return -1;
      index++;
      return recursion(deepElement?.next);
    }
    // loop
    return recursion(this._head);
  };

  /** @param index - element @ index or undefined*/
  elementAt(index: number){
    if(index > this.size() || this.isEmpty()) {return undefined}; // catch out of range

    let counter = 0;
    const recursion = (deepElement: LinkedListNode<T> | null | undefined): T | undefined => {
      if(index === counter) return deepElement?.value;
      else if(deepElement?.next === null) return undefined;
      counter++;
      return recursion(deepElement?.next);
    }
    // loop
    return recursion(this._head);
  };

  delete(element: T){
    if(this._head?.value === element){
      this._length--;
      this._head = this._head.next;
      return true;
    }

    let prevNode = this._head;

    const recursion = (deepElement: LinkedListNode<T> | null | undefined) => {
      if(deepElement?.value === element){
        this._length-- 
        return prevNode!.next = deepElement.next;
      }
      if(deepElement?.next !== null){
        prevNode = deepElement;
        recursion(deepElement?.next)
      }
      return true;
    }

    // loop
    return recursion(this._head?.next)
  };

  deleteAt(index: number){
    if(index >= this.size() || index < 0) {return null} // catch out of range
    if(this.size() === 1) {let r = this._head?.value; this._head = null; this._length--; return r} // if only one element, delete and return it

    let indexPosition = 0;
    let prevNode = this._head;

    // keep memory of prevNode, recursively dig into chain using ref of the next node      
    const recursion = (deepElement: LinkedListNode<T> | null | undefined): T | LinkedListNode<T> | null | undefined => {
      if(indexPosition === index){
        this._length--;
        prevNode!.next = deepElement?.next; // replace upper node with the removed node's chain.
        return deepElement!.value;
      }
      if(deepElement?.next !== null){ 
        indexPosition++;
        prevNode = deepElement; // save prev node, continue loop
        return recursion(deepElement?.next)
      }
    }
    return recursion(this._head);
  };
}

export { LinkedList, LinkedListNode }





  /** OLD js function class  version*/

  
// function LinkedList<T>() {
//     var length: number;
//     var head: LLNode<T>
  
//     this.head = function(){
//       return head;
//     };
  
//     this.size = function(){
//       return length;
//     };

//     this.isEmpty = function(){
//       return this.size() === 0;
//     };

//     // iterative apporach for better insertion speed
//     this.betterAdd = element => {
//       const node = new Node(element);
//       if (head) {
//         let current = head;
//         while (current.next !== null) {
//           current = current.next;
//         }
//         current.next = node;
//       }
//       else {
//         head = node;
//       }
//       length++;
//     };

//     /** @param findElem - element to find index of or -1 if not found */
//     this.indexOf = function(findElem){
//       if(this.isEmpty()) return -1 // catch out of range

//       let index = 0;
//       function recursion(deepElement){
//         if(deepElement.element === findElem) return index;
//         else if(deepElement.next === null) return -1;
//         index++;
//         return recursion(deepElement.next);
//       }
//       // loop
//       return recursion(head);
//     };

//     /** @param index - element @ index or undefined*/
//     this.elementAt = function(index){
//       if(index > this.size() || this.isEmpty()) {return undefined}; // catch out of range

//       let counter = 0;
//       function recursion(deepElement){
//         if(index === counter) return deepElement.element;
//         else if(deepElement.next === null) return undefined;
//         counter++;
//         return recursion(deepElement.next);
//       }
//       // loop
//       return recursion(head);
//     };
  
//     /** @param element - append to the end */
//     this.add = function(element){
//       length++ // increment length
      
//       if(head === null){
//         return head = new Node(element);
//       }
  
//       function recursion(deepElement){
//         if(deepElement.next === null){
//           return deepElement.next = new Node(element)
//         }
//         recursion(deepElement.next)
//       }
//       // loop
//       recursion(head)
//     };

//     this.addAt = function(index, newElement){
//       if(index >= this.size() || index < 0) {return false} // catch out of range

//       length++ // increment length

//       // head replace
//       if(index === 0){ 
//         let chain = head;
//         head = new Node(newElement);
//         head.next = chain;
//         return true;
//       }

//       let indexPosition = 0;
//       let prevNode = head;
  
//       // start loop
//       return recursion(head);
//       function recursion(deepNode){
//         if(indexPosition === index){ // set new node to preNode's ref, set newNode's ref to old node (ie deepNode)
//           let chain = deepNode;
//           let newChain = new Node(newElement);
//           prevNode.next = newChain;
//           newChain.next = chain;
//           return true
//         }
//         indexPosition++;
//         prevNode = deepNode;
//         return recursion(deepNode.next)
//       }
//     }

//     this.remove = function(element){
//       if(head.element === element){
//         length--
//         return head = head.next;
//       }

//       let prevNode = head;
  
//       function recursion(deepElement){
//         if(deepElement.element === element){
//           length-- 
//           return prevNode.next = deepElement.next;
//         }
//         if(deepElement.next !== null){
//           prevNode = deepElement;
//           recursion(deepElement.next)
//         }
//         return 'Removed'
//       }

//       // loop
//       recursion(head.next)
//     };

//     this.removeAt = function(index){
//       if(index >= this.size() || index < 0) {return null} // catch out of range
//       if(this.size() === 1) {let r = head.element; head = null; length--; return r} // if only one element, delete and return it

//       let indexPosition = 0;
//       let prevNode = head;

//       // keep memory of prevNode, recursively dig into chain using ref of the next node
//       return recursion(head);
//       function recursion(deepElement){
//         if(indexPosition === index){
//           length--;
//           prevNode.next = deepElement.next; // replace upper node with the removed node's chain.
//           return deepElement.element;
//         }
//         if(deepElement.next !== null){ 
//           indexPosition++;
//           prevNode = deepElement; // save prev node, continue loop
//           return recursion(deepElement.next)
//         }
//       }
//     };
//   }

//   export { LinkedList }

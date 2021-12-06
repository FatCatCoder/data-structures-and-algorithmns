/**
 * Chained Ordered list of items where each node contains reference to the next node.
 * @head get list
 * @size list length
 * @isEmpty boolean
 * @indexOf returns index of given element or -1
 * @elementAt find element @ index or undefined
 * @add element append to the end
 * @removeAt removes element @ index, If only one item in the list removes that node and returns the element
 * @addAt add (index, element) does not overwrite existing nodes
 * @remove delete given element
 * @removeAt delete node at given index
 */

function LinkedList() {
    var length = 0;
    var head = null;
  
    var Node = function(element){
      this.element = element;
      this.next = null;
    };
  
    this.head = function(){
      return head;
    };
  
    this.size = function(){
      return length;
    };

    this.isEmpty = function(){
      return this.size() === 0;
    };

    /** @param findElem - element to find index of or -1 if not found */
    this.indexOf = function(findElem){
      if(this.isEmpty()) return -1 // catch out of range

      let index = 0;
      function recursion(deepElement){
        if(deepElement.element === findElem) return index;
        else if(deepElement.next === null) return -1;
        index++;
        return recursion(deepElement.next);
      }
      // loop
      return recursion(head);
    };

    /** @param index - element @ index or undefined*/
    this.elementAt = function(index){
      if(index > this.size() || this.isEmpty()) {return undefined}; // catch out of range

      let counter = 0;
      function recursion(deepElement){
        if(index === counter) return deepElement.element;
        else if(deepElement.next === null) return undefined;
        counter++;
        return recursion(deepElement.next);
      }
      // loop
      return recursion(head);
    };
  
    /** @param element - append to the end */
    this.add = function(element){
      length++ // increment length
      
      if(head === null){
        return head = new Node(element);
      }
  
      function recursion(deepElement){
        if(deepElement.next === null){
          return deepElement.next = new Node(element)
        }
        recursion(deepElement.next)
      }
      // loop
      recursion(head)
    };

    this.addAt = function(index, newElement){
      if(index >= this.size() || index < 0) {return false} // catch out of range

      length++ // increment length

      // head replace
      if(index === 0){ 
        let chain = head;
        head = new Node(newElement);
        head.next = chain;
        return true;
      }

      let indexPosition = 0;
      let prevNode = head;
  
      // start loop
      return recursion(head);
      function recursion(deepNode){
        if(indexPosition === index){ // set new node to preNode's ref, set newNode's ref to old node (ie deepNode)
          let chain = deepNode;
          let newChain = new Node(newElement);
          prevNode.next = newChain;
          newChain.next = chain;
          return true
        }
        indexPosition++;
        prevNode = deepNode;
        return recursion(deepNode.next)
      }
    }

    this.remove = function(element){
      if(head.element === element){
        length--
        return head = head.next;
      }

      let prevNode = head;
  
      function recursion(deepElement){
        if(deepElement.element === element){
          length-- 
          return prevNode.next = deepElement.next;
        }
        if(deepElement.next !== null){
          prevNode = deepElement;
          recursion(deepElement.next)
        }
        return 'Removed'
      }

      // loop
      recursion(head.next)
    };

    this.removeAt = function(index){
      if(index >= this.size() || index < 0) {return null} // catch out of range
      if(this.size() === 1) {let r = head.element; head = null; length--; return r} // if only one element, delete and return it

      let indexPosition = 0;
      let prevNode = head;

      // keep memory of prevNode, recursively dig into chain using ref of the next node
      return recursion(head);
      function recursion(deepElement){
        if(indexPosition === index){
          length--;
          prevNode.next = deepElement.next; // replace upper node with the removed node's chain.
          return deepElement.element;
        }
        if(deepElement.next !== null){ 
          indexPosition++;
          prevNode = deepElement; // save prev node, continue loop
          return recursion(deepElement.next)
        }
      }
    };

  }
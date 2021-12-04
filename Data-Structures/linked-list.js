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
  }

const LL = new LinkedList();
LL.add('a');
LL.add('b');
LL.add('c');
LL.add('d');

console.log(LL.indexOf('a'))
console.log(LL.indexOf('b'))
console.log(LL.indexOf('c'))
 
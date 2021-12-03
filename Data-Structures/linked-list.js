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

  LL.remove('t');

  console.log('\n');
  console.log(LL.head());
  console.log(LL.size());
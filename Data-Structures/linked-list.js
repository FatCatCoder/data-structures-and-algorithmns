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
      // Only change code below this line
      length++
      if(head === null){
        return head = new Node(element);
      }
      else if(head.next === null){
        return head.next = new Node(element);
      }
  
      function recursion(deepElement){
        if(deepElement.next === null){
          return deepElement.next = new Node(element)
        }
        recursion(deepElement.next)
      }
  
      recursion(head)
      console.log(head)
      // Only change code above this line
    };
  }
  
  const LL = new LinkedList();
  LL.add('a');
  LL.add('b');
  LL.add('c');
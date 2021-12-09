/**
 * 
 * Doubly Linked List -
 * Ordered list of items where each item is a node containing a ref to the prev, next, and current node
 * 
 */

function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    var Node = function(data, prev, next){
        this.data = data;
        this.prev = prev || null;
        this.next = next || null;
    }

    /** appends new item
     * @newData item */
    this.add = function(newData){
        this.length++;
        let newNode = new Node(newData, this.tail);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return true;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        return true;
    }


    /** removes all matching items
     * @newData item */
    this.remove = (removable) => {
        if(this.head === null) return null; // empty list catch

        // first item edge
        if(this.head.data === removable){
            if(this.head.next){
                let temp = this.head.next;
                this.head = temp;
                this.head.prev = null;
            }
            else this.head = null;
        }

        // the rest of the list
        else{
            let node = this.head;

            while(node.data !== null){
                // last item edge
                if(node.next === null & node.data === removable){
                    this.tail = node.prev; // set tail, remove ref to removed item
                    node.prev.next = node.next;
                    node.prev = null;
                    
                }

                else if(node.data === removable){
                    node.prev.next = node.next; // the behind node's forward ref, now refs this node's forward node
                    node.next.prev = node.prev;
                }

                // break or continue pass by ref loop
                if(node.next === null) break;
                else node = node.next;
                
            }
        }
    }

    this.exists = (found) => {
        let node = this.head;

        while(node.data !== null){
            console.log(node);

            if(node.data === found){
                console.log(true);
                return true
            }
            
            if(node.next === null) {console.log(false); break;}
            else node = node.next;
            
        }
    }

    this.print = () => {
        let node = this.head;

        while(node.data !== null){
            console.log(node);
            
            if(node.next === null)  break;
            else node = node.next;
        }
    }

    this.reverse = function(){
        if(this.head === null) return null;

        let node = this.head;

        while(node.data !== null){
            console.log(node);
            let temp = node.next;

            node.next = node.prev;
            node.prev = temp;

            
            if(temp === null) break;
            else node = temp;
            
        }
        
        let flip = this.head;
        this.head = this.tail;
        this.tail = flip;
    }
}

const dll = new DoublyLinkedList();
dll.add('a');
dll.add('b');
dll.add('c');
// dll.remove('c');
// dll.exists('c');
// console.log(dll.tail);
dll.reverse();
console.log('\n');
dll.print();

module.exports = DoublyLinkedList;




/*
     this.add = function(newData){
        this.length++;

        if(this.head === null){
            return this.head = new Node(newData);
        }

        let prevNode = this.head;
        
        function recursiveAdd(deepNode){
            if(deepNode.next === null){
                return prevNode.next = new Node(newData, prevNode);
            }

            prevNode = deepNode.next;
            recursiveAdd(deepNode.next);
        }

        recursiveAdd(this.head); // start
    };




    this.remove = (removable) => {
        if(!this.head) return null;

        let prevNode = this.head;

        function recursive(deepNode){
            // c works
            if(deepNode.data === removable){
                deepNode.prev?
                    deepNode.prev.next = deepNode.next :
                    null;
                deepNode.next? 
                    deepNode.next.prev = deepNode.prev :
                    this.tail = deepNode.prev;

                this.length--;
            }
            if(deepNode.next === null) return 'Done';

            prevNode = deepNode.next;
            return recursive(deepNode.next);
        }

        return recursive(this.head); // start
    }
*/
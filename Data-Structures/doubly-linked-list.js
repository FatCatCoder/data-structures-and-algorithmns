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
}

const dll = new DoublyLinkedList();
dll.add('a');
dll.add('b');
dll.add('c');
console.log(dll.remove('c'));
console.log(dll.head);

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
*/
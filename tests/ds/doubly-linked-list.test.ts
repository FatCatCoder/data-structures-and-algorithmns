// Collection of unique items with various RW methods
const DoublyLinkedList = require('../../data-structures/doubly-linked-list');

describe('Doubly Linked List', () =>{

    it('New DoublyLinkedList()', () => {
        const dll = new DoublyLinkedList();
        expect(dll).not.toBeNull();
    });

    it('add()', () => {
        const dll = new DoublyLinkedList();

        dll.add('a');
        const aNode = dll.head;
        expect(dll.head).not.toBeNull();
        

        dll.add('b');
        const bNode = dll.head.next;
        expect(dll.tail).toBe(bNode)

        // nAb aBc bCn
        dll.add('c');
        const cNode = dll.head.next.next;
        expect(dll.tail).toBe(cNode)
        expect(dll.tail.prev).toBe(bNode)
        expect(dll.tail.prev.prev).toBe(aNode)
        expect(cNode.next).toBeNull()
        expect(cNode.prev).toBe(bNode)
    });

    it('remove()', () => {
        const dll = new DoublyLinkedList();

        dll.add('a');
        const aNode = dll.head;
        dll.add('b');
        const bNode = dll.head.next;

        dll.add('c');
        const cNode = dll.head.next.next;

        dll.remove('c')
        expect(dll.tail).toBe(bNode)
    }) 
    
})

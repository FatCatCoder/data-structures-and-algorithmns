const logger = require('../utils/prettyprint');
import { swap } from '../utils/arrayMutations';

/**
 * Complete Tree like structure where each root node 
 * is always the largest value of its desendants
 *  
 */
class MaxHeap{
    // Implemented with Array over Nodes for memory savings && fasting indexing
    private root: number[];

    constructor(){
        this.root = [];
    }

    private leftNode = (parentIndex: number): number => this.root[((parentIndex * 2) + 1)];
    private rightNode = (parentIndex: number): number => this.root[((parentIndex * 2) + 2)];
    private parentNode = (childIndex: number): number => this.root[this.parentIndex(childIndex)];
    private parentIndex = (childIndex: number): number => Math.floor((childIndex - 1) / 2);
    
    values = () => this.root;

    add(value: number){
        this.heapify(this.root.push(value) - 1);
    }

    remove(value: number){
        let idx = this.root.indexOf(value);

        this.root = this.root.filter(x => x != value)
        this.heapify(idx);
    }

    // after every node postion change run bubbling method to confirm tree
    // still meets the definition
    heapify(index: number){        
            let pos = index;
            let parentIdx = this.parentIndex(pos);
            
            while(pos > 0 && this.root[pos] > this.root[parentIdx]){
                swap(this.root, pos, parentIdx)
                pos = parentIdx;
                parentIdx = this.parentIndex(parentIdx)
        }
    }
}


const HeapTree = new MaxHeap();
const treeValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13]; 
treeValues.forEach(x => HeapTree.add(x));

const levelOrderValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13];

logger(HeapTree.values())

HeapTree.remove(14);

logger(HeapTree.values())

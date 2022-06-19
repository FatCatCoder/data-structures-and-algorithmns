const logger = require('../utils/prettyprint');
import { swap } from '../utils/arrayMutations';

class MaxHeap{
    private root: number[];

    constructor(){
        this.root = [];
    }

    private leftNode = (parentIndex: number): number => this.root[((parentIndex * 2) + 1)];
    private rightNode = (parentIndex: number): number => this.root[((parentIndex * 2) + 2)];
    private parentNode = (childIndex: number): number => this.root[(childIndex % 2 == 0)? Math.floor(((childIndex - 2) / 2)): Math.floor(((childIndex - 1) / 2))];
    
    add(value: number){
        this.maxHeapify(this.root.push(value) - 1);
    }

    maxHeapify(index: number){        
            let pos = index;
            let parentIdx = (Math.floor((pos-1)/2));
            while(pos > 0 && this.root[pos] > this.root[parentIdx]){
                swap(this.root, pos, parentIdx)
                pos = parentIdx;
                parentIdx = (Math.floor((parentIdx-1)/2))
        }
    }
}


const HeapTree = new MaxHeap();
const treeValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13]; 
treeValues.forEach(x => HeapTree.add(x));

const levelOrderValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13];

logger(HeapTree);

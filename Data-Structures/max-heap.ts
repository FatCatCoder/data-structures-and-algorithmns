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
        if(this.root[this.root.push(value) - 2] < value){
            let pos = this.root.length - 1;
            while(pos != 0 && this.root[pos] > this.root[this.parentNode(pos)]){
                if(this.parentNode(pos) > value)
            }
        }
    }
}


const HeapTree = new MaxHeap();
const treeValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13]; 
treeValues.forEach(x => HeapTree.add(x));

const levelOrderValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13];

logger(HeapTree);

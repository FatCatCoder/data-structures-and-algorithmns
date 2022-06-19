const logger = require('../utils/prettyprint') 

class TreeNode {
    value?: number;
    left?: TreeNode;
    right?: TreeNode;
    constructor(value?: number){
        this.value = value;
        this.left = undefined;
        this.right = undefined
    }
}

class MaxHeap{
    private root?: TreeNode;

    constructor(){
        this.root = undefined;
    }
    
    add(value: number,  pathRoot: TreeNode | null = null){
        if(this.root == undefined) this.root = new TreeNode(value);

        // let path = this.root;

        const Insert = (parent: TreeNode) => {
            if(parent.left?.value == undefined) parent.left = new TreeNode(value);
            else if(parent.right?.value == undefined) parent.right = new TreeNode(value);

            else{

                if(parent.left != undefined) Insert(parent.left)
                if(parent.right != undefined) Insert(parent.right)
            }
        }      
        Insert(this.root)  
    }
}


const HeapTree = new MaxHeap();
const treeValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13]; 
treeValues.forEach(x => HeapTree.add(x));

const levelOrderValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13];

logger(HeapTree);

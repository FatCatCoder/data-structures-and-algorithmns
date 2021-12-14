const log = require('../utils/print') 

class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree {
    root;
    constructor(){
        this.root = null;
    }
    /** returns undefined on success or null on fail */
    add(input){
        if(this.root === null) {this.root = new TreeNode(input); return undefined} // catch first
        
        let path = this.root;
        while(path.value != null){
            if(path.value === input){return null;}
            
            while(input > path.value){
                if(path.right === null){
                    path.right = new TreeNode(input);
                    return undefined
                }
                else path = path.right;
            }
            while(input < path.value){
                if(path.left === null){
                    path.left = new TreeNode(input);
                    return undefined
                }
                else path = path.left;
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.add(8);
tree.add(3);
tree.add(10);
tree.add(1);
tree.add(6);
log(tree);
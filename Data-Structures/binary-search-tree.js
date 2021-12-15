const log = require('../utils/prettyprint') 

class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    /** 
     * returns undefined on success or null on fail
     * @param input
     */
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

     /** 
     * returns value or null
     */
    findMin(){
        if(this.root === null) return null; // catch empty

        let path = this.root;
        let found = this.root.value;

        while(path.value != null){
            if(path.left === null){
                if (path.value < found){ found = path.value}
                break;
            }
            path = path.left;
        }
        return found;
    }

    /** 
     * returns value or null
     */
    findMax(){
        if(this.root === null) return null; // catch empty

        let path = this.root;
        let found = this.root.value;
        
        while(path.value != null){
            if(path.right === null){
                if (path.value > found){ found = path.value}
                break;
            }
            path = path.right;
        }
        return found;
    }

    /** 
     * checks for value, returns boolean
     * @param input
     */
    isPresent(input){
        if(this.root === null) return false;

        let path = this.root;
        while(path.value != null){
            if(path.value === input){return true;}
            
            while(input > path.value){
                if(path.right === null){return false} // not found
                if(path.right === input){
                    return true
                }
                else path = path.right;
            }
            while(input < path.value){
                if(path.left === null){return false} // not found
                if(path.left === input){
                    return true
                }
                else path = path.left;
            }
        }
    }
}

module.exports = BinarySearchTree

const tree = new BinarySearchTree();
tree.add(10);
tree.add(15);
tree.add(5); 
tree.add(7);
tree.add(2);
tree.add(17);
// tree.add(12);

log(tree.findMinHeight())

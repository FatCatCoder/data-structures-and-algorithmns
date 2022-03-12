const log = require('../utils/prettyprint') 

class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}
/**
 * Tree of nodes where each node has a left child which is less and a right child which is of greater value than itself
 * Any internal node without two children is called a leaf
 * Any Node with even one child and has a parent is called an internal node
 */
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
            if(path.value === input) return true;
            
            while(input > path.value){
                if(path.right === null) return false; // not found
                if(path.right === input){
                    return true;
                }
                else path = path.right;
            }
            while(input < path.value){
                if(path.left === null) return false; // not found
                if(path.left === input){
                    return true;
                }
                else path = path.left;
            }
        }
    }

    /** 
     * Checks if is proper BST
     */

    isBST(tree){
        if(tree.root === null) return null;

        let isTypeBST = true;

        checkTree(tree.root); //call
        function checkTree(node){
            if(node.left != null){
                const left = node.left
                if(left.valve > node.value){
                    isTypeBST = false;
                }
                else checkTree(left)
            }
            if(node.right != null){
                const right = node.right
                if(right.value < node.value){
                    isTypeBST = false;
                }
                else checkTree(right)
            }
        }
        return isTypeBST;
    }

    /** 
     * returns lowest branch || -1
     * @type int
     */
    findMinHeight(){
        if(this.root === null) return -1; // null case
        
        let min;

        // looping until every branch node reaches double null leaves, 
        // sets the min based on less than operator of prev min and current level

        (function loop(deepNode, level){

            // leaf node, set min
            if(deepNode.left === null && deepNode.right === null){
                if(level <= min || min === undefined) min = level;
            }
            // keep searching valid children nodes
            if(deepNode.left !== null) loop(deepNode.left, level + 1)
            if(deepNode.right !== null) loop(deepNode.right, level + 1) 

        } (this.root, 0))

        return min;
    }

    /** 
     * returns highest branch || -1
     * @type int
     */
     findMaxHeight(){
        if(this.root === null) return -1; // null case
        
        let max;

        /*  
            looping until every branch node reaches double null leaves, 
            sets the max based on greater than operator of prev max and current level
        */
        (function loop(deepNode, level){

            // leaf node, set max
            if(deepNode.left === null && deepNode.right === null){
                if(level >= max || max === undefined) max = level;
            }
            // keep searching valid children nodes
            if(deepNode.left !== null) loop(deepNode.left, level + 1)
            if(deepNode.right !== null) loop(deepNode.right, level + 1) 

        } (this.root, 0))

        return max;
    }

    /**
     * Min and Max leaf Node levels at least 0 or 1 levels apart
     * @return boolean
     */
    isBalanced(){
        const diff = this.findMaxHeight() - this.findMinHeight();
            return (diff === 1 || diff === 0)? true : false;
    }

    // Depth First Search //

    /**
     * Begin the search at the left-most node until you reach its leaf node, 
     * then traverse backup moving along to its sibling's leaf,
     * until ending at the right-most node's leaf
     * @return Array or Null
     */
    inorder(){
        if(this.root === null) return null; // null case
        
        let values = [];

        (function traverse(node){
            if(node === null){return null}
            traverse(node.left)
            values.push(node.value)
            traverse(node.right)
        } (this.root))
        return values;
    }

    /**
     * Explore all the roots before the leaves. 
     */
    preorder(){ 
        if(this.root === null) return null; // null case
        
        let values = [];

        (function traverse(node){
            if(node === null){return null}
            values.push(node.value)
            traverse(node.left)
            traverse(node.right)
        } (this.root))
        return values;
    }

    /**
     * Explore all the leaves before the roots
     */
    postorder(){ 
        if(this.root === null) return null; // null case
        
        let values = [];

        (function traverse(node){
            if(node === null){return null}
            traverse(node.left)
            traverse(node.right)
            values.push(node.value)
        } (this.root))
        return values;
     }

     // Breadth First Searches //

     /**
      * Goes from left to right, searching each node on the same level
      * before moving down to the children's level
      */
    levelOrder(){
        if(this.root === null) return null; // null case
        
        let queue = [this.root];
        let values = [];

        while(queue.length > 0){
            const qNode = queue.shift();
            values.push(qNode.value);

            if(qNode.left != null) queue.push(qNode.left)
            if(qNode.right != null) queue.push(qNode.right) 
        }
        return values
    }

    /**
      * Level order but from right to left
      */
    reverseLevelOrder(){
        if(this.root === null) return null; // null case
        
        let queue = [this.root];
        let values = [];

        while(queue.length > 0){
            const qNode = queue.shift();
            values.push(qNode.value);

            if(qNode.right != null) queue.push(qNode.right)
            if(qNode.left != null) queue.push(qNode.left) 
        }
        return values
    }
}

const tree = new BinarySearchTree();
const treeValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13]; 
treeValues.forEach(x => tree.add(x));

const levelOrderValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13];
console.log(tree.levelOrder());
console.log(tree.reverseLevelOrder());

module.exports = BinarySearchTree

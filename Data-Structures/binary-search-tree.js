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
     * returns lowest branch || -1
     * @type int
     */
    findMinHeight(){
        if(this.root === null) return -1; // null case
        
        let min = 1;

        // looping until every branch node reaches double null leaves, 
        // sets the min based on less than operator and current level
        loop(this.root, 1) 
        function loop(deepNode, level){
           if(deepNode.left === null || deepNode.right === null){
            console.log('check   ', deepNode.value, min, level);
                if(level < min){ min = level }; // if min is already set, do nothing
           }
           else{
               console.log(deepNode.value, min, level);
               min++;
               if(deepNode.left !== null) {loop(deepNode.left, ++level)}
               if(deepNode.right !== null) {loop(deepNode.right, ++level)}
           }
        };
        console.log('MIN: ', min);
        return min;
    }

    /** 
     * returns highest branch || -1
     * @type int
     */
     findMaxHeight(){
        if(this.root === null) return -1; // null case
        
        let max = 1;

        // looping until every branch node reaches double null leaves, 
        // sets the max based on less than operator and current level
        loop(this.root, 1) 
        function loop(deepNode, level){
           if(deepNode.left === null || deepNode.right === null){
                return max > level ? null : max = level; // if max is already set, do nothing
           }
           else{
               loop(deepNode.left, ++level)
               loop(deepNode.right, ++level)
           }
        };
        console.log('MAX: ', max);
        return max;
    }
}

module.exports = BinarySearchTree

// const tree = new BinarySearchTree();
// const tree2 = new BinarySearchTree();

// const treeValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13, 12.5];
// treeValues.forEach(x => tree.add(x));

// const tree2Values = [15, 14, 13, 12, 11, 10, 9, 8, 7];
// tree2Values.forEach(x => tree2.add(x));

// log(tree);
//tree.findMinHeight();
// console.log(tree2);
// tree2.findMinHeight();
//tree.findMaxHeight();

// tree.add(10);
// tree.add(15);
// tree.add(5); 
// tree.add(7);
// tree.add(2);
// tree.add(17);
// tree.add(12);

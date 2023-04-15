export class AVLTreeNode {
    value: number;
    left: AVLTreeNode | null;
    right: AVLTreeNode | null;
    height: number;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.height = 1;
    }
  }
  
  export class AVLTree {
    root: AVLTreeNode | null;
  
    constructor() {
      this.root = null;
    }

    public printTree(root: AVLTreeNode | null, prefix = '', isLeft = true): void {
      if (!root) {
        return;
      }
    
      console.log(`${prefix}${isLeft ? '├──' : '└──'}${root.value}`);
    
      const newPrefix = prefix + (isLeft ? '│  ' : '   ');
      this.printTree(root?.left, newPrefix, true);
      this.printTree(root?.right, newPrefix, false);
    }
  
    private getHeight(node: AVLTreeNode | null): number {
      if (!node) {
        return 0;
      }
      return node.height;
    }
  
    private getBalanceFactor(node: AVLTreeNode | null): number {
      if (!node) {
        return 0;
      }
      return this.getHeight(node.left) - this.getHeight(node.right);
    }
  
    private updateHeight(node: AVLTreeNode | null) {
      if (!node) {
        return;
      }
      node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }
  
    private rotateLeft(node: AVLTreeNode): AVLTreeNode {
      const newRoot = node.right;
      const leftSubtree = newRoot!.left;
  
      newRoot!.left = node;
      node.right = leftSubtree;
  
      this.updateHeight(node);
      this.updateHeight(newRoot);
  
      return newRoot as AVLTreeNode;
    }
  
    private rotateRight(node: AVLTreeNode): AVLTreeNode {
      const newRoot = node.left;
      const rightSubtree = newRoot!.right;
  
      newRoot!.right = node;
      node.left = rightSubtree;
  
      this.updateHeight(node);
      this.updateHeight(newRoot);
  
      return newRoot as AVLTreeNode;
    }
  
    private rebalance(node: AVLTreeNode): AVLTreeNode {
      this.updateHeight(node);
  
      const balanceFactor = this.getBalanceFactor(node);
  
      if (balanceFactor > 1) {
        if (this.getBalanceFactor(node.left) < 0) {
          node.left = this.rotateLeft(node.left!);
        }
        return this.rotateRight(node);
      } else if (balanceFactor < -1) {
        if (this.getBalanceFactor(node.right) > 0) {
          node.right = this.rotateRight(node.right!);
        }
        return this.rotateLeft(node);
      }
  
      return node;
    }
  
    insert(value: number) {
      const newNode = new AVLTreeNode(value);
  
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      const insertHelper = (node: AVLTreeNode) => {
        if (value < node.value) {
          if (!node.left) {
            node.left = newNode;
          } else {
            insertHelper(node.left);
          }
        } else {
          if (!node.right) {
            node.right = newNode;
          } else {
            insertHelper(node.right);
          }
        }
  
        node = this.rebalance(node);
      };
  
      insertHelper(this.root);
    }
  
    search(value: number): AVLTreeNode | null {
      let currentNode = this.root;
  
      while (currentNode) {
        if (currentNode.value === value) {
          return currentNode;
        } else if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
  
      return null;
    }

    remove(value: number) {
        this.root = this.removeHelper(this.root, value);
      }
    
      private findMinimum(node: AVLTreeNode): AVLTreeNode {
        while (node.left) {
          node = node.left;
        }
        return node;
      }
    
      private removeHelper(node: AVLTreeNode | null, value: number): AVLTreeNode | null {
        if (!node) {
          return null;
        }
    
        if (value < node.value) {
          node.left = this.removeHelper(node.left, value);
        } else if (value > node.value) {
          node.right = this.removeHelper(node.right, value);
        } else {
          // Case 1: No child
          if (!node.left && !node.right) {
            node = null;
          }
          // Case 2: One child
          else if (!node.left || !node.right) {
            node = node.left || node.right;
          }
          // Case 3: Two children
          else {
            const minRightNode = this.findMinimum(node.right);
            node.value = minRightNode.value;
            node.right = this.removeHelper(node.right, minRightNode.value);
          }
        }
    
        if (!node) {
          return null;
        }
    
        node = this.rebalance(node);
        return node;
      }
}

// quick testing
// let avlTree: AVLTree;
// const values = [50, 25, 75, 12, 37, 60, 90, 10, 15, 30, 40, 55, 65, 80, 95];
// avlTree = new AVLTree();
// values.forEach((value) => {
//     avlTree.insert(value);
//   });

//   avlTree.printTree(avlTree.root);

// Collection of unique items with various RW methods
const BST = require('../../data-structures/binary-search-tree');

describe('Binary Search Tree', () => {
    /*

        10
       /  \
      5   15
     /\   /\
    2  7 12 17

    */

//     it('New BST()', () => {
//         const tree = new BST();
//         expect(tree).not.toBeNull();
//     });

//     it('add()', () => {
//         const tree = new BST();

//         tree.add(10); // root
//         expect(tree.root.value).toEqual(10);

//         tree.add(15); // Right
//         expect(tree.root.right.value).toEqual(15);

//         tree.add(5); // Left
//         expect(tree.root.left.value).toEqual(5);

//         tree.add(7); // LR
//         expect(tree.root.left.right.value).toEqual(7);

//         tree.add(2); // LL
//         expect(tree.root.left.left.value).toEqual(2);

//         tree.add(17); // RR
//         expect(tree.root.right.right.value).toEqual(17);

//         tree.add(12); // RL
//         expect(tree.root.right.left.value).toEqual(12);



//         // console.debug(null, tree.root.left.right.value)
        
//     });

//     it('Find', () => {
//         const tree = new BST();
//         tree.add(10);
//         tree.add(15);
//         tree.add(5); 
//         tree.add(7);
//         tree.add(2);
//         tree.add(17);
//         tree.add(12);
//         expect(tree).not.toBeNull();
//     });

//     it('FindMinHeight()', () => {
//          // Arrange
//          const tree = new BST();
//          const tree2 = new BST();
//          const tree3 = new BST();
//          const tree4 = new BST();
//          const tree5 = new BST();
 
//          // Act
//          const treeValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13, 12.5]; // 2
//          treeValues.forEach(x => tree.add(x));
 
//          const tree2Values = [15, 10, 20, 5, 12, 17, 2, 8, 14, 13, 12.5]; // 2
//          tree2Values.forEach(x => tree2.add(x));

//          const tree3Values = [15, 10, 20, 5, 12, 2, 8, 14, 13, 12.5]; // 1
//          tree3Values.forEach(x => tree3.add(x));

//          const tree4Values = [15, 10, 5, 12, 2, 8, 14, 13, 12.5]; // 3
//          tree4Values.forEach(x => tree4.add(x));

//          tree5.add(15) // 0
 
//          // Assert
//          expect(tree5.findMinHeight()).toEqual(0);
//          expect(tree4.findMinHeight()).toEqual(3);
//          expect(tree3.findMinHeight()).toEqual(1);
//          expect(tree2.findMinHeight()).toEqual(2);
//          expect(tree.findMinHeight()).toEqual(2);
         
//     });

//     it('FindMinHeight()', () => {
//         // Arrange
//         const tree = new BST();
//         const tree2 = new BST();
//         const tree3 = new BST();
//         const tree4 = new BST();
//         const tree5 = new BST();

//         // Act
//         const treeValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13]; // 4
//         treeValues.forEach(x => tree.add(x));

//         const tree2Values = [15, 10, 20, 5, 12, 17, 2, 8, 14, 13, 12.5]; // 5
//         tree2Values.forEach(x => tree2.add(x));

//         const tree3Values = [15, 10, 20, 5, 12, 2, 8, 14, 13, 12.5]; // 5
//         tree3Values.forEach(x => tree3.add(x));

//         const tree4Values = [15, 10, 5, 12, 2, 8, 14, 13, 12.5]; // 5
//         tree4Values.forEach(x => tree4.add(x));

//         tree5.add(15) // 0

//         // Assert
//         expect(tree5.findMaxHeight()).toEqual(0);
//         expect(tree4.findMaxHeight()).toEqual(5);
//         expect(tree3.findMaxHeight()).toEqual(5);
//         expect(tree2.findMaxHeight()).toEqual(5);
//         expect(tree.findMaxHeight()).toEqual(4);
        
//    });

// it('FindMaxHeight()', () => {
//         // Arrange
//         const tree = new BST();
//         const tree2 = new BST();
//         const tree3 = new BST();
//         const tree4 = new BST();
//         const tree5 = new BST();

//         // Act
//         const treeValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13]; // 4
//         treeValues.forEach(x => tree.add(x));

//         const tree2Values = [15, 10, 20, 5, 12, 17, 2, 8, 14, 13, 12.5]; // 5
//         tree2Values.forEach(x => tree2.add(x));

//         const tree3Values = [15, 10, 20, 5, 12, 2, 8, 14, 13, 12.5]; // 5
//         tree3Values.forEach(x => tree3.add(x));

//         const tree4Values = [15, 10, 5, 12, 2, 8, 14, 13, 12.5]; // 5
//         tree4Values.forEach(x => tree4.add(x));

//         tree5.add(15) // 0

//         // Assert
//         expect(tree5.findMaxHeight()).toEqual(0);
//         expect(tree4.findMaxHeight()).toEqual(5);
//         expect(tree3.findMaxHeight()).toEqual(5);
//         expect(tree2.findMaxHeight()).toEqual(5);
//         expect(tree.findMaxHeight()).toEqual(4);
        
//    });

    // it('isBalanced()', () => {
    //             // Arrange
    //             const tree = new BST();
    //             const tree2 = new BST();
    //             const tree3 = new BST();
    //             const tree4 = new BST();
    //             const tree5 = new BST();
        
    //             // Act
    //             const treeValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13]; 
    //             treeValues.forEach(x => tree.add(x));
        
    //             const tree2Values = [15, 10, 20, 5, 12, 17, 2, 8, 14, 13, 12.5]; 
    //             tree2Values.forEach(x => tree2.add(x));
        
    //             const tree3Values = [15, 10, 20, 5, 12, 2, 8, 14, 13, 12.5]; 
    //             tree3Values.forEach(x => tree3.add(x));
        
    //             const tree4Values = [15, 10, 5, 12, 2, 8, 14, 13, 12.5];
    //             tree4Values.forEach(x => tree4.add(x));
        
    //             tree5.add(15) // 0
        
    //             // Assert
    //             expect(tree5.isBalanced()).toEqual(true)
    //             expect(tree4.isBalanced()).toEqual(false);
    //             expect(tree3.isBalanced()).toEqual(false);
    //             expect(tree2.isBalanced()).toEqual(false);
    //             expect(tree.isBalanced()).toEqual(false);
                
    //     });

    // it('inorder()', () => {
    //     // Arrange
    //     const tree = new BST();

    //     // Act
    //     const treeValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13]; 
    //     treeValues.forEach(x => tree.add(x));

    //     const inorderValues = [2, 5, 8, 10, 13, 14, 12, 17, 20, 15];

    //     // Assert
    //     expect(tree.inorder()).toEqual(inorderValues);
    // });

    // it('preorder()', () => {
    //     // Arrange
    //     const tree = new BST();

    //     // Act
    //     const treeValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13]; 
    //     treeValues.forEach(x => tree.add(x));

    //     const preordervalues = [15, 10, 5, 2, 8, 12, 14, 13, 20, 17, 25];

    //     // Assert
    //     expect(tree.inorder()).toEqual(preordervalues);
    // });

    // it('postorder()', () => {
    //     // Arrange
    //     const tree = new BST();

    //     // Act
    //     const treeValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13]; 
    //     treeValues.forEach(x => tree.add(x));

    //     const postordervalues = [2, 8, 5, 13, 14, 12, 10, 17, 25, 20, 15];

    //     // Assert
    //     expect(tree.postorder()).toEqual(postordervalues);
    // });

    it('levelOrder()', () => {
        // Arrange
        // const tree = new BST();

        // // Act
        // const treeValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13]; 
        // treeValues.forEach(x => tree.add(x));

        // const levelOrderValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13];
        // console.debug(tree.levelOrder());

        // // Assert
        // expect(tree.levelOrder()).toEqual(levelOrderValues);
    });
    
})

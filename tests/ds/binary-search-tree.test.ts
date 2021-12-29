// Collection of unique items with various RW methods
const BST = require('../../data-structures/binary-search-tree');

describe('Binary Search Tree', () =>{
    /*

        10
       /  \
      5   15
     /\   /\
    2  7 12 17

    */

    // it('New BST()', () => {
    //     const tree = new BST();
    //     expect(tree).not.toBeNull();
    // });

    // it('add()', () => {
    //     const tree = new BST();

    //     tree.add(10); // root
    //     expect(tree.root.value).toEqual(10);

    //     tree.add(15); // Right
    //     expect(tree.root.right.value).toEqual(15);

    //     tree.add(5); // Left
    //     expect(tree.root.left.value).toEqual(5);

    //     tree.add(7); // LR
    //     expect(tree.root.left.right.value).toEqual(7);

    //     tree.add(2); // LL
    //     expect(tree.root.left.left.value).toEqual(2);

    //     tree.add(17); // RR
    //     expect(tree.root.right.right.value).toEqual(17);

    //     tree.add(12); // RL
    //     expect(tree.root.right.left.value).toEqual(12);



    //     // console.debug(null, tree.root.left.right.value)
        
    // });

    // it('Find', () => {
    //     const tree = new BST();
    //     tree.add(10);
    //     tree.add(15);
    //     tree.add(5); 
    //     tree.add(7);
    //     tree.add(2);
    //     tree.add(17);
    //     tree.add(12);
    //     expect(tree).not.toBeNull();
    // });

    it('FindMinHeight()', () => {
         // Arrange
         const tree = new BST();
         const tree2 = new BST();
 
         // Act
         const treeValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13, 12.5];
         treeValues.forEach(x => tree.add(x));
 
         const tree2Values = [15, 14, 13, 12, 11, 10, 9, 8, 7, 20, 17, 25];
         tree2Values.forEach(x => tree2.add(x));
 
         // Assert
         expect(tree2.findMinHeight()).toEqual(3);
         expect(tree.findMinHeight()).toEqual(3);
         
    });

    // it('FindMaxHeight()', () => {
    //     // Arrange
    //     const tree = new BST();
    //     const tree2 = new BST();

    //     // Act
    //     const treeValues = [15, 10, 20, 5, 12, 17, 25, 2, 8, 14, 13, 12.5];
    //     treeValues.forEach(x => tree.add(x));

    //     const tree2Values = [15, 14, 13, 12, 11, 10, 9, 8, 7, 20, 17];
    //     tree2Values.forEach(x => tree2.add(x));

    //     // Assert
    //     expect(tree2.findMaxHeight()).toEqual(9);
    //     expect(tree.findMaxHeight()).toEqual(6);
        
    // });
    
})

import { AVLTree } from '../../Data-Structures/avl-tree';

////////////////////////////////
// what our tree looks like 
///////////////////////////////
//            50
//         /       \
//      25            75
//     /  \         /    \
//   12   37       60     90
//  / \   /  \    /  \    /  \
// 10 15 30  40  55   65 80  95
//
//        
////////////////////////////////


describe("AVLTree", () => {
  let avlTree: AVLTree;
  const values = [50, 25, 75, 12, 37, 60, 90, 10, 15, 30, 40, 55, 65, 80, 95];

  beforeEach(() => {
    avlTree = new AVLTree();

    values.forEach((value) => {
        avlTree.insert(value);
      });
  });

  test("inserts and balances nodes correctly", () => {
    // Check that the tree has the correct structure and heights
    expect(avlTree.root?.value).toBe(50);
    expect(avlTree.root?.height).toBe(4);

    expect(avlTree.root?.left?.value).toBe(25);
    expect(avlTree.root?.left?.height).toBe(3);

    expect(avlTree.root?.left?.left?.value).toBe(12);
    expect(avlTree.root?.left?.left?.height).toBe(2);

    expect(avlTree.root?.left?.left?.left?.value).toBe(10);
    expect(avlTree.root?.left?.left?.left?.height).toBe(1);

    expect(avlTree.root?.left?.left?.right?.value).toBe(15);
    expect(avlTree.root?.left?.left?.right?.height).toBe(1);

    expect(avlTree.root?.left?.right?.value).toBe(37);
    expect(avlTree.root?.left?.right?.height).toBe(2);

    expect(avlTree.root?.left?.right?.left?.value).toBe(30);
    expect(avlTree.root?.left?.right?.left?.height).toBe(1);

    expect(avlTree.root?.left?.right?.right?.value).toBe(40);
    expect(avlTree.root?.left?.right?.right?.height).toBe(1);

    expect(avlTree.root?.right?.value).toBe(75);
    expect(avlTree.root?.right?.height).toBe(3);

    expect(avlTree.root?.right?.left?.value).toBe(60);
    expect(avlTree.root?.right?.left?.height).toBe(2);

    expect(avlTree.root?.right?.left?.left?.value).toBe(55);
    expect(avlTree.root?.right?.left?.left?.height).toBe(1);

    expect(avlTree.root?.right?.left?.right?.value).toBe(65);
    expect(avlTree.root?.right?.left?.right?.height).toBe(1);

    expect(avlTree.root?.right?.right?.value).toBe(90);
    expect(avlTree.root?.right?.right?.height).toBe(2);

    expect(avlTree.root?.right?.right?.left?.value).toBe(80);
    expect(avlTree.root?.right?.right?.left?.height).toBe(1);

    expect(avlTree.root?.right?.right?.right?.value).toBe(95);
    expect(avlTree.root?.right?.right?.right?.height).toBe(1);
  });


    test("removes a leaf node correctly", () => {
      avlTree.remove(40);

      expect(avlTree.root?.right?.right?.value).toBe(90);
      expect(avlTree.root?.right?.right?.height).toBe(2);

      expect(avlTree.root?.right?.right?.left?.value).toBe(80);
      expect(avlTree.root?.right?.right?.left?.height).toBe(1);

      expect(avlTree.root?.right?.right?.right?.value).toBe(95);
      expect(avlTree.root?.right?.right?.right?.height).toBe(1);

      expect(avlTree.root?.right?.value).toBe(75);
      expect(avlTree.root?.right?.height).toBe(3);

      expect(avlTree.root?.right?.left?.value).toBe(60);
      expect(avlTree.root?.right?.left?.height).toBe(2);

      expect(avlTree.root?.right?.left?.left?.value).toBe(55);
      expect(avlTree.root?.right?.left?.left?.height).toBe(1);

      expect(avlTree.root?.right?.left?.right?.value).toBe(65);
      expect(avlTree.root?.right?.left?.right?.height).toBe(1);
    });

    test("prints a tree correctly", () => {
      avlTree.printTree(avlTree.root);
    });
  
})


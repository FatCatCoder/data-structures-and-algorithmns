const log = require('../utils/prettyprint') 

class TrieNode {
  keys = new Map();
  end = false;
  setEnd = () => {
    this.end = true;
  };
  isEnd = () => {
    return this.end;
  };
};


class Trie {
    root: TrieNode;

    constructor(){
        this.root = new TrieNode;
    }

    add(newStr: string){
        let path: TrieNode = this.root;

        newStr.split('').forEach((elm, idx) => {
            const NextPath: TrieNode = new TrieNode;
            if(idx == newStr.length-1){
                NextPath.setEnd()
                path.keys.set(elm, NextPath);
            }   
            else if (!path.keys.has(elm)) {
                path.keys.set(elm, NextPath);
                path = NextPath;
            }
            else{
                path = path.keys.get(elm);
            } 
        });
    } 

    /** gets single word selection  */
    isWord () {} 

    /** gets all words in trie as array  */
    print () {
        let path = this.root;
        let arr: string[] = [];

        while(path != null){
            
        }
    } 
};

const tree = new Trie;
tree.add("hell");
tree.add("help");
tree.add("hello");
// log(tree);
tree.print();
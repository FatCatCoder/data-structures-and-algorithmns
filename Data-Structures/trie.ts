const log = require('../utils/prettyprint') 
const util = require('util');

class TrieNode {
  keys = new Map();
  end = false;

  setEnd = () => {
    this.end = true;
  };
  isEnd = () => {
    return this.end;
  };
  unSetEnd = () => {
    this.end = false;
  }
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

    delete(delWord: string): boolean{
      if(!this.hasWord(delWord)) return false

      let root = this.root;

      delWord.split("").forEach((letter, index) => {
          if (index == delWord.length-1 && root.keys.get(letter).isEnd()) {
            if(root.keys.get(letter)?.keys?.size == 0){ //root.keys.size <= 1 && 
                root.keys.delete(letter);
            }
            else root.keys.get(letter).unSetEnd();
          }

          // // displays letters and next letter of keys
          // let allkeys : any= [];
          // for(let i of root.keys.keys()){
          //   let tmp : any= [];
          //   for(let z of root.keys.get(i).keys.keys()){
              
          //     tmp.push(z)
          //   }
          //   allkeys.push({letter: i, next: tmp})
          // }

          // console.log(letter, 
          //   JSON.stringify({keys: allkeys, end: root.isEnd()}), 
          //   root.keys.get(letter).keys.keys().next().value);
          root = root.keys.get(letter); 
      });

      return true
    }

    /** gets single word selection  */
    hasWord (findWord: string): boolean {
        let root = this.root;

        return findWord.split("").every((letter, index) => {
            if(root.keys.has(letter)){
                root = root.keys.get(letter);
                return (index == findWord.length-1 && !root?.isEnd())?  
                false: true
            } else return false
        });
    } 

    /** gets all words in trie as array  */
    print (): string[] {
        const words: string[] = [];
    
        function Loop(root: any, word: any) {
          if (root.keys.size != 0) {
            root.keys.forEach((value: any,key: any, map: any) => {
              Loop(value, word.concat(key));
           })
            if (root.isEnd()) {
              words.push(word);
            }
          }
          else {
            word.length > 0 ? words.push(word) : undefined;
            return;
          }
        }
        
        Loop(this.root, "");

        return words;
      };

      // Recursive function to delete a key from given Trie
 remove(root: any,key: any ,depth: any)
{
    // If tree is empty
        if (root == null)
            return null;
  
        // If last character of key is being processed
        if (depth == key.length) {
  
            // This node is no more end of word after
            // removal of given key
            if (root.isEnd())
                root.unSetEnd();
  
            // If given is not prefix of any other word
            if (root.keys.size == 0) {
                root = null;
            }
  
            return root;
        }
  
        // If not last character, recur for the child
        // obtained using ASCII value
        let index = key[depth].charCodeAt(0) - 'a'.charCodeAt(0);
        root.children[index] =
            this.remove(root.children[index], key, depth + 1);
  
        // If root does not have any child (its only child got
        // deleted), and it is not end of another word.
        if (root.keys.size==0 && root.isEnd() == false){
            root = null;
        }
  
        return root;
}
};

const tree = new Trie;
      tree.add("he");
      tree.add("help");
      tree.add("hello");
      // tree.add("hells");
      tree.add("all");
      tree.add("al");
      tree.add("zoe");
      tree.add("zoo");

log(tree.print());

// log(tree.delete("hello"))
tree.remove(tree.root, "hello", "hello".length)

log(tree.print());

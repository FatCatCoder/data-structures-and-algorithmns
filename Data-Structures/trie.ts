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
                if(!path.keys.has(elm))
                     path.keys.set(elm, NextPath);
                else path.keys.get(elm).setEnd()
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
      let roots: TrieNode[] = [];

      delWord.split("").forEach((letter, index) => {
        roots.push(root);
          if (index == delWord.length-1 && root.keys.get(letter).isEnd()) {
            if(root.keys.get(letter)?.keys?.size == 0){ //root.keys.size <= 1 && 
                root.keys.delete(letter);
            }
            else {
              root.keys.get(letter).unSetEnd();
            }
          }

          root = root.keys.get(letter); 
      });

      // Clean up (removes dead nodes after deletion)
      const CleanUp = () => {
        root = this.root;
      
        delWord.split("").forEach((letter, index) => {
          if(root?.keys != undefined && root?.keys?.get(letter)?.keys != undefined)
          {
            if(root.keys.size == 1 && root.keys.get(letter).keys.size == 0 && !root.keys.get(letter).isEnd()){
              root.keys.delete(letter)
            }
            root = root.keys.get(letter); 
          }
        });
      }

      CleanUp()
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
            root.keys.forEach((value: any, key: any, map: any) => {
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
};

const tree = new Trie;
      tree.add("he");
      tree.add("help");
      tree.add("hello");
      tree.add("hellos");
      // tree.add("al");
      tree.add("all");
      tree.add("al");
      tree.add("zoe");
      tree.add("zoo");

log(tree.print());

tree.delete("al")

log(tree.print());

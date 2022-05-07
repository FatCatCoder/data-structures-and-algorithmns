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
          if (index == delWord.length-1 && root.isEnd()) {
            if(root.keys.size <= 1){
                root.keys.delete(letter);
            }
            else root.keys.get(letter).setEnd(false);
          }

          console.log(letter, root.keys.get(letter).keys.keys().next().value);
          console.log(JSON.stringify(root.keys.keys()));
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
};

const tree = new Trie;
      tree.add("he");
      tree.add("help");
      tree.add("hello");
      tree.add("all");
      tree.add("al");
      tree.add("zoe");
      tree.add("zoo");

log(tree.print());

log(tree.delete("hello"))

log(tree.print());

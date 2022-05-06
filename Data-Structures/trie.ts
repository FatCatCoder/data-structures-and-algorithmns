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

    /** gets single word selection  */
    isWord () {} 

    /** gets all words in trie as array  */
    print () {
        const words: string[] = [];
    
        function Loop(root: any, word: any) {
          if (root.keys.size != 0) {
            root.keys.forEach((value: any,key: any,map: any) => {
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

      findEndWord(){
          let path = this.root;
          let strings = [];
          let string = "";

          while(!path.isEnd() && path.keys.size != 0){
            log(path.keys.keys().next().value)

           
            string += path.keys.keys().next().value;

            if(path.isEnd()){
                strings.push(string)
            }
            path = path.keys.values().next().value;
          }

          log(path)
          return string;
      }
};

const tree = new Trie;
tree.add("he");
tree.add("help");
tree.add("hello");
tree.add("all");
tree.add("al");
tree.add("zoe");
tree.add("zoo");

// log(tree.root.keys.keys())

// log(tree.findEndWord());
// log(tree.root.keys.keys().next().value)


// log(tree.root.keys.keys().next().value)

log(tree.print());

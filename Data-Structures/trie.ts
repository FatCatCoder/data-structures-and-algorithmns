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
        let arr: string[] = [];

        const getWord = (x: TrieNode, y: string, z: Map<any, any>) => {
            let path = x;
            let currChar: string = y;
            let tmp: string = '';

            // while(true){
            //     // if(path == undefined || path == null || path.keys.size == 0 && path.isEnd()){
            //     //     tmp += currChar;
            //     //     arr.unshift(tmp);
            //     //     tmp = '';
            //     //     break;
            //     // }
            //     // else if (path.isEnd()){
            //     //     tmp += currChar;
            //     //     arr.unshift(tmp);
            //     // }
            //     // else{
            //     //     tmp += currChar;
            //     //     currChar = z.get(y);
            //     // }
                
            //     path = z.get(y);
            // }
        }

        this.root.keys.forEach((x, y, z) => {
            log(x instanceof TrieNode)
            log(y instanceof String)
            log(z instanceof Map)
            // log(x, 'BREAK', y, 'BREAK', z)
            getWord(x,y,z);
        });

        // console.log(arr);
        return arr;       
    } 
};

const tree = new Trie;
tree.add("hell");
tree.add("help");
tree.add("hello");
// log(tree);
tree.print();
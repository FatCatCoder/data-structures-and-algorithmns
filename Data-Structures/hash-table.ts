import { LinkedList, LinkedListNode } from "./linked-list";

const _log = require('../utils/prettyprint') 

/** 
 * Using hash functions to generate a determinstic identifier 
 * we can store a large number of elements with a lookup of O(1)
 */

class HashTable<T>{
    public table: {[k: number]: T};

    constructor(){
        this.table = {};
    }

    // A basic hash F^n, just for POC
    hashCode(toHash: T): number {
        let preHash = JSON.stringify(toHash); // unsafe!!

        function hashStringify(hashable: string){
            var hash = 0;
            for (var i = 0; i < hashable.length; i++) {
                var code = hashable.charCodeAt(i);
                hash = ((hash<<5)-hash)+code;
                hash = hash & hash; // Convert to 32bit integer
            }
            return hash;
        }
        return hashStringify(preHash); // hash
    }

    insert(data: T): void{
        let hashed = this.hashCode(data);
        this.table[hashed] = data;
    }

    delete(data: T){
        let hashed = this.hashCode(data);
        delete this.table[hashed];
    }

    exists = (data: T) =>
        this.table[this.hashCode(data)] != undefined;

    getTable = () => this.table;
    
}

/** 
    Uses Linked List for collision avoidance but will causes dupes to be saved! 
*/
class HashTableWithCollisions<T>{
    public table: {[k: number]: LinkedList<T>};

    constructor(){
        this.table = {};
    }

    // A basic hash F^n, just for POC
    hashCode(toHash: T): number {
        let preHash = JSON.stringify(toHash); // unsafe!!

        function hashStringify(hashable: string){
            var hash = 0;
            for (var i = 0; i < hashable.length; i++) {
                var code = hashable.charCodeAt(i);
                hash = ((hash<<5)-hash)+code;
                hash = hash & hash; // Convert to 32bit integer
            }
            return hash;
        }
        return hashStringify(preHash); // hash
    }

    insert(data: T): void{
        let hashed = this.hashCode(data);

        if(this.exists(data))// add new LL Node
             this.table[hashed].insert(data);
        else this.table[hashed] = new LinkedList<T>(data);  // Create LL with data
    }

    delete(data: T){
        let hashed = this.hashCode(data);
        if(this.exists(data)){
            this.table[hashed].delete(data);
        }
        else delete this.table[hashed];
    }

    exists = (data: T) =>
        this.table[this.hashCode(data)] != undefined;

    getTable = () => this.table;  
}

const ht = new HashTable<any>();

ht.insert({"key": "hello"});
ht.insert({"key": "world"});

_log(ht.table)



const htc = new HashTableWithCollisions<any>();

htc.insert({"key": "hello"});
htc.insert({"key": "hello"});
htc.insert({"key": "world"});

console.log(htc.table[htc.hashCode({"key": "hello"})].size()) // 2


/*

 # Definition
    - A collection of unique items used with various methods for mutating and accessing 
 # Pseudocode
    - Create Class of a Set
    - Init object
    - create methods for mutation of set (has, values)
    - create mutators (remove, add)
*/

// TODO - convert to TS
class SetItem<T>{
  public Key: T;
  public Value: any;

  constructor(KeyItem: T, ValueItem: any){
    this.Key = KeyItem;
    this.Value = ValueItem;
  }
}

/**
 * Collection of unique items
 * @class init new set
 */
 class Set<T> {
  private dictionary: any;
  private length = 0;

  constructor() {   
    this.dictionary = {};  // Dictionary will hold the items of our set
    this.length = 0;
  }

  /** This method will check for the presence of an element and return true or false
 * @param item - new item */
  has(element: T) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  /** Adds new item, returns boolean 
 * @param item - new item */
  add(item: T){
      if (!this.has(item)){
          this.dictionary[item] = item;
          this.length++
          return true;
      }
      return false;
  }
  
 /** Removes item, returns boolean 
 * @param item - item to remove */
  remove(item: T){
      if(this.has(item)){
        delete this.dictionary[item]
        this.length--
        return true
      }
    return false
  }

  size(){
      return this.length
  }

  union(externalSet: Set<T>) {
    const unionSet = new Set();
    this.dictionary.values().forEach((x: T) => unionSet.add(x))
    externalSet.values().forEach((x: any) => unionSet.add(x))
    return unionSet;
  }

  intersection(externalSet: Set<T>){
    const intersectionSet = new Set();
    this.values().forEach(x => externalSet.values().includes(x) ? intersectionSet.add(x): null)
    return intersectionSet
  }

  uniqueDifference(externalSet: Set<T>){
    const differenceSet = new Set();
    const valSet1 = this.values().filter(x => externalSet.values().includes(x))
    valSet1.forEach(x => differenceSet.add(x))
    return differenceSet;
  }
}

export {Set};
module.exports = Set;
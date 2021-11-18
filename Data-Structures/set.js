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

/**
 * Collection of unique items
 * @class init new set
 */
 class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  /** This method will check for the presence of an element and return true or false
 * @param item - item */
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  
  values() {
    return Object.values(this.dictionary);
  }

  /** Adds new item, returns boolean 
 * @param item - new item */
  add(item){
      console.log(this.dictionary)
      if (!this.has(item)){
          //this.dictionary = {...this.dictionary, item};
          this.dictionary[item] = item;
          ++this.length
          return true;
      }
      return false;
  }
  
 /** Removes item, returns boolean 
 * @param item - item to remove */
  remove(item){
      if(this.has(item)){
          return false
      }
      delete this.dictionary[item]
      --this.length
      return true
  }

  size(){
      return this.length
  }
}


module.exports = Set;
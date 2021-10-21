/*

 # Definition
    - search through each item in a list testing for a match to supplied value.
    
 # Pseudocode
    - for each item, test if item equals value, return item's index

 # Note
    - verbose forLoop, could use ES6 forEach method

*/


function linearSearch(array: number[], matcher: number){
    let found: number;
    for(let x: number = 0; x <= array.length; x++){
        if(array[x] === matcher){
            return found = x;
        }
    }
    return found;
}

module.exports = linearSearch;
/*

    # Definition
        - search through each item in a list testing for a match to supplied value.
        
    # Pseudocode
        - for each item, test if item equals value, return item's index

*/

// verbose forLoop, could use ES6 forEach method

function linearSearch(array, matcher){
    let found;
    for(let x = 0; x <= array.length; x++){
        if(array[x] === matcher){
            return found = x;
        }
    }
    return found;
}

module.exports = linearSearch;
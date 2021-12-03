/*

 # Definition
    - Divide and Conquer by choosing splitting the array into half's until reaching sub array of one element,
      then merge the smaller arrays sorting as they are concatenated until you reach one sorted array.
      
 # Pseudocode
    - check if length is finished
    - recursively call mergeSort on each split
    - while still elements in both arrays check for the larger number, pus hot temp array and remove that element from its respective split
    - check for remaining elements in array as last largest number and push to temp array
    - return temp array

*/


/**
 * Sorts values, maintaining order
 * @param array - Array of numbers
 */
function mergeSort(array: Array<number>): number[]{
    if(array.length === 1){
        return array;
    }

    let arrayOne = mergeSort(array.slice(0, array.length/2));
    let arrayTwo = mergeSort(array.slice(array.length/2));

    return merge(arrayOne, arrayTwo);
}

function merge(arrayOne: Array<number>, arrayTwo: Array<number>){
    let arrayThree = [];

    while(arrayOne.length && arrayTwo.length){    
        if(arrayOne[0] > arrayTwo[0]){            
            arrayThree.push(arrayTwo[0])            
            arrayTwo.splice(0, 1)        
        }
        else{
            arrayThree.push(arrayOne[0])
            arrayOne.splice(0, 1)
        }
    }

    while(arrayOne.length){    
        arrayThree.push(arrayOne[0])
        arrayOne.splice(0, 1)
    }

    while(arrayTwo.length){    
        arrayThree.push(arrayTwo[0])
        arrayTwo.splice(0, 1)
    }
    
    return arrayThree;
}

module.exports = mergeSort;


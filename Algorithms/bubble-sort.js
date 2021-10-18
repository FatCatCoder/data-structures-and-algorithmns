/*

 # Definition
    - Iterate through an array swapping two items so that the larger valued item is place before the lower value items

 # Pseudocode
    - init a counter
    - loop through array and on each swap +1 to the counter
    - repeat until finished

*/

function swap(array, itemA, itemB){
    let temp = array[itemA];
    array[itemA] = array[itemB];
    array[itemB] = temp;
}

function bubbleSort (arr){
    let swapped = false;
    for(let i=0; i < arr.length-1; ++i){
        if(arr[i] > arr[i+1]){
            swap(arr, i, i+1)
            swapped = true;
        }
    }
    if(swapped){
        bubbleSort(arr);
    }
    return arr;
}

module.exports = bubbleSort;
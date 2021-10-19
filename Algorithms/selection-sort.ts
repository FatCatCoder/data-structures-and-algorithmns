/*

 # Definition
    - Iterate through a list selection the smallest value element and add swap the item to the beginning,
      on each new loop, start from the unsorted part of the list and repeat until all sorted.
      
 # Pseudocode
    - for i in array-1
    - init val = i
    - for j in array
    - if (nth) j < val then val = j
    - swap i with j
    - restart loop from unsorted part array[i+1] 

*/

import { swap } from '../utils/arrayMutations'

function selectionSort(array: Array<number>){
    for(let i = 0; i < array.length-1; ++i){
        let val = i;
        for(let j = i + 1; j < array.length; ++j){
            if(array[j] < array[val]){
                val = j;
            }
        }
        if(val != i){
            swap(array, i, val)
        }
    }
    return array;
}

module.exports = selectionSort;
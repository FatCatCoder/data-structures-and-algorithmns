/*

 # Definition
    - Sort array by comparing adjacent items then moving the smaller item to sub array of perviously sorted items on the left side
      checking each item in that sub array for the newly sorted items position in it.
      
 # Pseudocode
    - select last element
    - recursively call quicksort on each partition until start < end
    - on partition
    - init pivot as end ending value for the partition
    - loop through partition swapping less to left and greater to right

 # Notes
    - This implementation starts from the ending value
*/

import { swap } from '../utils/arrayMutations'

/**
 * This implementation starts from the ending value
 * @param array - Array of numbers
 */
function insertionSort(array: Array<number>){
    for(let i: number = 1; i < array.length; i++){
        let j = i - 1;
        let key = array[i]

        while(j >= 0 && array[j] > key){
            swap(array, j+1, j)
            j--
        }
    }
    return array;
}

module.exports = insertionSort;


/*

 # Definition
    - Divide and Conquer by choosing a pivot point and moving lesser values to the left and greater values to the right
      then repeat this for each broken half after its been sorted
      
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
 * @param start - starting index (defaults to: 0)
 * @param end - ending index, first pivot (defaults to: array.length - 1)
 */
function quickSort(array: Array<number>, start: number = 0, end: number = array.length - 1){
    if(start < end){
        let pivot: number = partition(array, start, end);
        quickSort(array, start, pivot - 1);
        quickSort(array, pivot + 1, end);
    }
    return array;
}

function partition(array: Array<number>, start: number, end: number){
    let pivot: number = array[end];
    let i: number = start;

    for(let j: number = start; j <= end; ++j){
        if(array[j] < pivot){
            swap(array, i, j);
            ++i;
        }
    }
    swap(array, i, end)
    return i;
}

module.exports = quickSort;


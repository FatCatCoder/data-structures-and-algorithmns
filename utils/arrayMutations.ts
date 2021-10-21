// swaps two array elements

/**
 * @param array - Array of numbers
 * @param itemA - index of item
 * @param itemB - index of second item
 */ 
export function swap(array: Array<number>, itemA: number, itemB: number){
    let temp = array[itemA];
    array[itemA] = array[itemB];
    array[itemB] = temp;
}
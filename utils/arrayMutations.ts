// swaps two array elements

/**
 * @param array - Array of numbers
 * @param itemA - index of item (temp replaced then swapped with B)
 * @param itemB - index of second item
 */ 
export function swap<T>(array: T[], itemA: number, itemB: number){
    let temp = array[itemA];
    array[itemA] = array[itemB];
    array[itemB] = temp;
}
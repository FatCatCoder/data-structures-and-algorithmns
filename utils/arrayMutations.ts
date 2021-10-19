// swaps two array elements
export function swap(array: Array<number>, itemA: number, itemB: number){
    let temp = array[itemA];
    array[itemA] = array[itemB];
    array[itemB] = temp;
}
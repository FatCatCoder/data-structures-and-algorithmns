/*
  # Inventory update
    - Compare and update the inventory stored in a 2D array against a second 2D array. 
      Update the current existing inventory item quantities. If an item cannot be found,
      add the new item and quantity into the inventory array. 
      The returned inventory array should be in alphabetical order by item.


  # Pseudocode
    - reduce two arrays to one
    - look through new array
    - if item is in old array, replace with new item
    - if not in array add to new array
*/

function itemUpsert(total, currVal, currInd){
    const newInv = total.map(x => x);
    const exists = newInv.find(x => x[1] == currVal[1])
    const indOf = newInv.indexOf(exists)

    if(exists){
        newInv[indOf][0] += currVal[0];
    }
    else{
        newInv.push(currVal)
    }
    return newInv;
}

function updateInventory(arr1, arr2) {
    const solution = arr2.reduce(itemUpsert, arr1);
    solution.sort((a, b) => a[1].localeCompare(b[1]))
    return solution;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log('first \n', updateInventory(curInv, newInv), '\n compared to \n', [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]);

var currInv2 = [[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]];

// var newInv2 = [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]];

// console.log('second \n', updateInventory(currInv2, newInv2));

const difference = (arr1, arr2) => {
  const valSet1 = arr2.filter(x => !arr1.includes(x))
  const valSet2 = arr1.filter(x => !arr2.includes(x))
  const solution = valSet1.concat(valSet2)
  return solution;
}

function sym(...args) {
  const arrayOfArrays = args;
  const solution = arrayOfArrays.reduce(difference, [])
  return [...new Set(solution)].sort();
}

  // tests
  console.log(sym([1, 2, 3], [5, 2, 1, 4])); // [3, 4, 5]

  // sym([1, 2, 3, 3], [5, 2, 1, 4]) // same
  // sym([1, 2, 3], [5, 2, 1, 4, 5]) // same
  ///sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) // [1, 4, 5]
  // sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) //same
  // sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) // [2, 3, 4, 6, 7]
  // sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) // [1, 2, 4, 5, 6, 7, 8, 9]

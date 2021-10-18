const search = require('../algorithms/linear-search');

const array1 = [0,1,2,3,4,5,6,7,8,9];
const array2 = [2,4,3,1,6,55,883,4];
const array3 = [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5,7,7,7,7,7,7,7,7,7,7,3,2,6,7,8,5,4,4,7,8,45,6,6,666666666,4,3,7,9,5,0]

test('Finds element in array and returns index', () => {
  expect(search(array1, 5)).toEqual(5);
  expect(search(array2, 4)).toEqual(1);
  expect(search(array3, 5)).toEqual(24);
});
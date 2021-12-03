export {};
const sort = require('../../algorithms/insertion-sort');

const array1 = [2,5,1,4,2,3,8];
const array2 = [1,2,3,4,5,3,7];
const array3 = [9,8,7,6,5,4,3,2,1];

test('Sorts by linear backwards traversal', () => {
  expect(sort(array1)).toEqual([1,2,2,3,4,5,8]);
  expect(sort(array2)).toEqual([1,2,3,3,4,5,7]);
  expect(sort(array3)).toEqual([1,2,3,4,5,6,7,8,9]);
});
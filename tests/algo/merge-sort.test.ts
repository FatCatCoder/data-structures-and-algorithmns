export {};
const sort = require('../../algorithms/merge-sort');

const array: number[] = [10, 80, 30, 90, 40, 50, 70];
const arraySorted: number[] = [10, 30, 40, 50, 70, 80, 90];

test('Sorts by Divide and conquering smaller arrays and rebuilding them in order', () => {
  expect(sort(array)).toEqual(arraySorted);
});

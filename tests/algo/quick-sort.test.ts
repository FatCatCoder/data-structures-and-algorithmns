export {};
const sort = require('../../algorithms/quick-sort');

const array: number[] = [10, 80, 30, 90, 40, 50, 70];
const arraySorted: number[] = [10, 30, 40, 50, 70, 80, 90];

test('Sorts by pivoting with partitions starting from the first ending index value', () => {
  expect(sort(array)).toEqual(arraySorted);
});
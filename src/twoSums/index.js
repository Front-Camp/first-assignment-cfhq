/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
  if (arr == null || arr.length === 0)
    return null;

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let x = arr[i] + arr[j];
    if (x < base) {
      ++i;
    } else if (x > base) {
      j--;
    } else {
      return [i + 1, j + 1 ];
    }
  }

  return null;
};

export default twoSums;

/**
 * Radix sort helper function
 * getDigit returns the digit in "num" at certain given "place" value
 *
 * getDigit(7325, 2) => 3
 *
 * @param {Int} num
 * @param {Int} place
 *
 * @return {Int}
 */

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

/**
 * Radix sort helper function
 * digitCount returns how many digit in "num"
 *
 * digitCount(7325) => 4
 *
 * @param {Int} num
 *
 * @return {Int}
 */

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Radix sort helper function
 * mostDigits returns the number of digits in the largest numbers in the list
 *
 * mostDigits([1234, 56, 7]) => 4
 *
 * @param {Array} nums
 *
 * @return {Int}
 */

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

/**
 * Sorts array using radix sort method (Recursive).
 *
 * Time complexity: O(nm)
 *
 * n = length of array
 * m = number of digits
 *
 * Space complexity: O(n+m)
 *
 * A newly created array to store sorted elements.
 *
 * @param {Array} arr
 *
 * @return {Array}
 *
 */

function radixSort(arr) {
  const maxDigitCount = mostDigits(arr);

  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      const currDigit = getDigit(arr[j], i);
      digitBuckets[currDigit] = [...digitBuckets[currDigit], arr[j]];
    }
    arr = [].concat(...digitBuckets); // [].concat(...[[1],[2],[3]]) => [1,2,3]
  }

  return arr;
}

radixSort([23, 567, 345, 5477, 12, 2341, 9834]);

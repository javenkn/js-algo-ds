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

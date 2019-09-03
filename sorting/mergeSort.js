/**
 * Merges two sorted arrays.
 *
 * @param {Array} arr
 * @param {Array} arr2
 *
 * @return {Array}
 */

function merge(arr, arr2) {
  const mergedArr = [];
  let i = 0;
  let j = 0;

  // while there are values that we haven't looked at
  while (i < arr.length || j < arr2.length) {
    // if either array is empty push the remaining elements of the other array into the merged array
    if (!arr[i]) {
      mergedArr.push(arr2[j]);
      j++;
    } else if (!arr2[j]) {
      mergedArr.push(arr[i]);
      i++;
    } else if (arr[i] < arr2[j]) {
      // if val in arr is less than val in arr2
      mergedArr.push(arr[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  return mergedArr;
}

/**
 * Sorts array using merge sort method (Recursive).
 *
 * Time complexity: O(n log n)
 *
 * O(log n): 2^n, The number of times needed to split the array.
 * eg. An array with 4 elements.
 *     In this case n = 2 because the array gets split twice
 *     to get 4, 1 element arrays. (2^2 = 4 elements)
 *
 *            4
 *        2       2
 *     1   1    1   1
 *
 * O(n): The number of comparisons needed for each split.
 *
 * Space complexity: O(n)
 *
 * A newly created array to store sorted elements.
 *
 * @param {Array} arr
 *
 * @return {Array}
 *
 */

function mergeSort(arr) {
  // Base case: when array breaks down to the length of 1.
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2); // Midpoint of array.
  // Breaks up the array until it has single value arrays
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right); // Merge left and right arrays back.
}

mergeSort([10, 7, 28, 15, 80, 74]);

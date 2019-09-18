/**
 * Pivot helper function for quick sort.
 *
 * @param {Array} arr
 *
 * @return {Integer}
 *
 */

function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
  let swapIndex = startIndex;

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[startIndex] > arr[i]) {
      // If arr[i] is smaller than swap with the value of arr[swapIndex].
      swapIndex++; // Increments swapIndex by 1.
      swap(arr, swapIndex, i);
    }
  }

  // Swap the starting value with the swap index value.
  swap(arr, startIndex, swapIndex);

  return swapIndex;
}

/**
 * Sorts array using quick sort method (Recursive).
 *
 * Time complexity:
 *
 *  Best: O(n log n)
 *    O(log n) decompositions: 2^n, The number of times needed to split the array.
 *                             (same as merge sort)
 *    O(n) comparisons per decomposition
 *  Worst: O(n^2)
 *    if pivot is always min/max element, we would
 *    have to make O(n) decompositions and O(n) comparisons per decomposition.
 *
 * Space complexity: O(log n)
 *
 * A newly created array to store sorted elements.
 *
 * [4,6,9,1,2,5,3]    Original array
 * [3,1,2,4,6,9,5]    (1) Implements pivot and gets index
 *        4
 * 3,2,1    6,9,5     (2) Takes left and right of the pivot
 *     3      6       (3) Recursively runs pivot on left and right until sorted
 * 2,1      5   9
 *   2
 * 1
 *
 * @param {Array} arr
 *
 * @return {Array}
 *
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // Only run when left index is less than right index.
    const pivotIndex = pivot(arr, left, right);
    // Left side of pivot
    quickSort(arr, left, pivotIndex - 1);
    // Right side of pivot
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

quickSort([10, 7, 28, 15, 80, 74]);

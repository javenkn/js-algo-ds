/**
 * Pivot helper function for quick sort.
 *
 * @param {Array} arr
 *
 * @return {Integer}
 *
 */

function pivot(arr) {
  let startIndex = 0; // Sets start value as the first value in the array.
  let swapIndex = 0;

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[startIndex] > arr[i]) {
      // If arr[i] is smaller than swap with the value of arr[swapIndex].
      swapIndex++; // Increments swapIndex by 1.
      swap(arr, swapIndex, i);
    }
  }

  // Swap the starting value with the swap index value.
  swap(arr, swapIndex, startIndex);

  return swapIndex;
}

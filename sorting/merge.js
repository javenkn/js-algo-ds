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
  let i,
    j = 0;

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

merge([1, 3, 5], [2, 4, 7]);

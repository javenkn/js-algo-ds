/**
 *       100
 *     /    \
 *   90      80
 *  /  \    /  \
 * 10  20  30  50
 *
 * Parent -> Children:
 * left child: 2n + 1
 * right child: 2n + 2
 *
 * Children -> Parent:
 * Math.floor((n+1)/2)
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1; // index last pushed val

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2); // gets the parent index
      const parent = this.values[parentIndex];
      const value = this.values[index];
      if (value <= parent) break; // if the value is smaller than the parent then break
      // if the parent is smaller than the value
      // swap the parent with the value
      this.values[parentIndex] = value;
      this.values[index] = parent;
      // update the index with the new index (parent index)
      index = parentIndex;
    }
  }
}

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(33);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(11);
console.log(maxBinaryHeap.values);
maxBinaryHeap.insert(100);
console.log(maxBinaryHeap.values);

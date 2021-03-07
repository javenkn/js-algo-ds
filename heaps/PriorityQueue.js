/**
 *       1
 *     /   \
 *    2     3
 *  /  \
 * 4   5
 *
 * Parent -> Children:
 * left child: 2n + 1
 * right child: 2n + 2
 *
 * Children -> Parent:
 * Math.floor((n+1)/2)
 */

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  dequeue() {
    const min = this.values[0];
    const lastChild = this.values.pop();
    if (this.values.length > 0) {
      // replace the min node with the last child
      this.values[0] = lastChild;
      // find the correct spot for the new min
      this.sinkDown();
    }
    return min;
  }

  bubbleUp() {
    let index = this.values.length - 1; // index last pushed val

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2); // gets the parent index
      const parent = this.values[parentIndex];
      const value = this.values[index];
      if (value.priority >= parent.priority) break; // if the value is greater than the parent then break
      // if the parent is greater than the value
      // swap the parent with the value
      this.values[parentIndex] = value;
      this.values[index] = parent;
      // update the index with the new index (parent index)
      index = parentIndex;
    }
  }

  sinkDown() {
    let index = 0; // starts off at the min's index
    const currNode = this.values[index]; // current min value
    const length = this.values.length;

    while (index < this.values.length) {
      const leftChildIndex = 2 * index + 1; // formula to get left child's index: 2n + 1
      const leftChild = this.values[leftChildIndex];
      const rightChildIndex = 2 * index + 2; // formula to get right child's index: 2n + 2
      const rightChild = this.values[rightChildIndex];
      let swapIndex = null; // starts off with no swapping needed

      if (leftChildIndex < length) {
        // if the leftChildIndex is in bounds (smaller than the heap length)
        if (leftChild.priority < currNode.priority) {
          // if the leftChild value is smaller than the current min's value
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        // if the rightChildIndex is in bounds (smaller than the heap length)
        if (
          (swapIndex === null && rightChild.priority < currNode.priority) ||
          (swapIndex !== null && rightChild.priority < leftChild.priority)
        ) {
          // if the swap index is null (the leftChild value wasn't smaller than the current min value)
          // and the rightChild value is smaller than the current min's value
          // OR
          // if there is a swap index (the leftChild value was smaller than the current min value)
          // and the rightChild value is smaller than the leftChild value
          // THEN
          // set the swapIndex to the rightChildIndex
          swapIndex = rightChildIndex;
        }
      }

      // if a swap index wasn't set then both the leftChild and rightChild value is greater than the current min value
      if (swapIndex === null) break;

      // swap the nodes
      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = currNode;

      // update the index with the swapped index and continue sinking down
      index = swapIndex;
    }
  }
}

class Node {
  constructor(val, priority) {
    // priority: 1 (most important), higher numbers (least important)
    this.val = val;
    this.priority = priority;
  }
}

const hospital = new PriorityQueue();
hospital.enqueue("common cold", 5);
hospital.enqueue("gunshot wound", 1);
hospital.enqueue("high fever", 4);
hospital.enqueue("broken arm", 2);
hospital.enqueue("glass in foot", 3);
console.log(hospital.values);
console.log(hospital.dequeue());
console.log(hospital.dequeue());
console.log(hospital.values);

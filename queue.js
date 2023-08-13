/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    if (this.size == 0){
      let newNode = new Node(val);
      this.first = newNode;
      this.last = newNode;
      this.size += 1;
      return undefined;
    }
    else if (this.size == 1){
      let newNode = new Node(val);
      let firstNode = this.first;
      firstNode.next = newNode;
      this.first = firstNode;
      this.last = newNode;
      this.size += 1;
      return undefined;
    }
    else {
      let newNode = new Node(val);
      let lastNode = this.last;
      lastNode.next = newNode;
      this.last = newNode;
      this.size += 1;
      return undefined;
    }
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size > 2){
      let firstNode = this.first;
      let nextNode = firstNode.next;
      this.first = nextNode;
      firstNode.next = null;
      this.size -= 1;
      return firstNode.val;
    }
    else if (this.size == 2){
      let firstNode = this.first;
      firstNode.next = null;
      this.first = this.last;
      this.size -= 1;
      return firstNode.val;
    }
    else if (this.size == 1){
      let firstNode = this.first;
      this.first = null;
      this.last = null;
      this.size -= 1;
      return firstNode.val;
    }
    throw new Error ('The list is currently empty.')
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size >= 1){
      return this.first.val
    }
    return undefined
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size == 0){
      return true
    }
    return false
  }
}

module.exports = Queue;

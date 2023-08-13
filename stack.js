/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    if (this.size == 0){
      let newNode = new Node(val);
      this.first = newNode;
      this.last = newNode;
      this.size += 1;
      return undefined;
    }
    if (this.size == 1){
      let newNode = new Node(val);
      let lastNode = this.last;
      newNode.next = lastNode;
      this.first = newNode;
      this.last = lastNode;
      this.size += 1;
      return undefined;
    }
    else {
      let newNode = new Node(val);
      let firstNode = this.first;
      newNode.next = firstNode;
      this.first = newNode;
      this.size += 1;
      return undefined;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size > 2){
      let firstNode = this.first;
      let nextNode = firstNode.next;
      this.first = nextNode;
      firstNode.next = null;
      this.size -= 1;
      return firstNode.val;
    }
    if (this.size == 2){
      let firstNode = this.first;
      firstNode.next = null;
      this.first = this.last;
      this.size -= 1;
      return firstNode.val;
    }
    if (this.size == 1){
      let firstNode = this.first;
      firstNode.next = null;
      this.first = null;
      this.last = null;
      this.size -= 1;
      return firstNode.val;
    }
    throw new Error ('The stack is currently empty.')
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size >= 1){
      return this.first.val
    }
    return undefined
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size == 0){
      return true
    }
    return false
  }
}

module.exports = Stack;

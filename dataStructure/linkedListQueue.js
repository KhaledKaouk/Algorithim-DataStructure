const linkedList = require("./linkedListWithTail");

class Queue {
  constructor() {
    this.queue = new linkedList();
  }

  enqueue(value) {
    this.queue.prepend(value);
  }
  dequeue() {
    this.queue.removeFromEnd();
  }
  peek() {
    return this.queue.tail.value;
  }
  print() {
    return this.queue.print();
  }
  isEmpty() {
    return this.queue.isEmpty();
  }
  getSize() {
    return this.queue.getSize();
  }
}

// const newQueue = new Queue();
// console.log(newQueue.isEmpty());

// newQueue.enqueue(10);
// newQueue.enqueue(20);
// newQueue.enqueue(30);
// console.log(newQueue.getSize());
// newQueue.print();
// console.log(newQueue.dequeue());
// newQueue.print();
// console.log(newQueue.peek());

module.exports = Queue
class circularQueue {
  queueData = {};
  rear = 0;
  front = 0;
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  enQueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.queueData[this.rear] = element;
      this.currentLength++;
      if (this.front === -1) this.front = this.rear;
    }
  }
  deQueue() {
    if (this.isEmpty()) return null;

    const item = this.queueData[this.front];
    this.queueData[this.front] == null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;

    if (this.isEmpty()) this.front = this.rear = -1;

    return item;
  }

  peek() {
    if (!this.isEmpty()) return this.queueData[this.front];
    return null;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.queueData[i] + " ";
      }
      str += this.queueData[i];
      console.log(str);
    }
  }
}

let orders = new circularQueue(5);
console.log(orders.isEmpty());
orders.enQueue("chikcen");
orders.enQueue("meat");
orders.enQueue("desert");
orders.enQueue("tea");
orders.enQueue("coffee");
console.log(orders.isFull());
orders.print();
console.log(orders.deQueue());
console.log(orders.peek());

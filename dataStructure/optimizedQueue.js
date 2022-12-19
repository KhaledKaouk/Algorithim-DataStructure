class optimizedQueue {
  queueData = {};
  rear = 0;
  front = 0;
  constructor(data) {
    if (data) data.forEach((element) => this.queueData.push(element));
  }

  enQueue(element) {
    this.queueData[this.rear] = element;
    this.rear++;
  }
  deQueue() {
    delete this.queueData[this.front];
    this.front++;
  }
  peek() {
    return this.queueData[this.front];
  }

  isEmpty() {
    return this.front === this.rear;
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.queueData);
  }
}

let orders = new optimizedQueue();
orders.enQueue("meat");
orders.enQueue("desert");
orders.deQueue();
console.log(orders.peek());
orders.enQueue("tea");
orders.print();

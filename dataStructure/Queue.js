class Queue {
  queuekData = [];
  constructor(data) {
    if (data) data.forEach((element) => this.queuekData.push(element));
  }

  enQueue(element) {
    this.queuekData.unshift(element);
  }
  deQueue() {
    this.queuekData.pop();
  }
  peek() {
    return this.queuekData[this.queuekData.length - 1];
  }

  isEmpty() {
    return this.queuekData.length === 0;
  }
  size() {
    return this.queuekData.length;
  }
  print() {
    this.queuekData.forEach((element) => {
      console.log(element);
    });
  }
}

let orders = new Queue();
orders.enQueue("first");
orders.enQueue("second");
orders.enQueue("third");

// orders.print();
orders.deQueue();
orders.deQueue();
orders.print();

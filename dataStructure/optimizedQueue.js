class optimizedQueue {
  queuekData = [];
  rear = 0;
  front = 0;
  constructor(data) {
    if (data) data.forEach((element) => this.queuekData.push(element));
  }

  enQueue(element) {
    this.queuekData[this.rear] = element;
    this.rear++;
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

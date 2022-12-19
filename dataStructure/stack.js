class stack {
  stackData = [];
  constructor(data) {
    if (data) data.forEach((element) => this.stackData.push(element));
  }

  push(element) {
    this.stackData.push(element);
  }
  pop() {
    this.stackData.pop();
  }
  peek() {
    return this.stackData[this.stackData.length - 1];
  }

  isEmpty() {
    return this.stackData.length === 0;
  }
  size() {
    return this.stackData.length;
  }
  print() {
    this.stackData.forEach((element) => {
      console.log(element);
    });
  }
}

let goods = new stack();
goods.push("7 glasses");
goods.push("10 glasses");
// goods.print();
goods.pop();
// goods.print();
goods.push("20 glasses");
console.log(goods.peek());

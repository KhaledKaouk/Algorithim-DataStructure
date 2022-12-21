const linkedList = require("./linkedListWithTail");

class Stack {
  constructor() {
    this.stack = new linkedList();
  }
  push(element) {
    this.stack.prepend(element);
  }
  pop() {
    this.stack.removeFromFront();
  }
  peek() {
    return this.stack.head;
  }
  isEmpty() {
    return this.stack.isEmpty();
  }
  getSize() {
    return this.stack.getSize();
  }
  print() {
    return this.print();
  }
}

let newStack = new Stack();
newStack.push("FI");
newStack.push("LI");
newStack.pop();
console.log(newStack);

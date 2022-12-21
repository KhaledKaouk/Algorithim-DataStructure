class LNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new LNode(value);

    if (!this.isEmpty()) node.next = this.head;
    if (this.isEmpty()) this.tail = node;

    this.head = node;

    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new LNode(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  append(value) {
    let node = new LNode(value);
    if (this.isEmpty()) {
      this.prepend(value);
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  Oappend() {
    let node = new LNode(value);
    if (this.isEmpty()) {
      this.prepend(value);
    } else {
      this.node.next = this.tail;
      this.tail.next = node;
    }
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) return null;
    let removedNode;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }

    this.size--;
  }

  removeValue(value) {
    if (this.isEmpty()) return null;
    let removedValue;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
    } else {
      let prev = this.head;
      while (prev.next.value !== value && prev.next) {
        prev = prev.next;
      }
      if (prev.next) {
        removedValue = prev.next;
        prev.next = removedValue.next;
        this.size--;
      }
    }
  }
  search(value) {
    if (this.isEmpty()) return -1;
    let node = this.head;
    while (node && node.value != value) {
      node = node.next;
    }
    return node || -1;
  }
  reverse() {
    if (!this.head.next || this.isEmpty()) return;

    let current = this.head;
    let prev;
    while (node.next) {
      let next = current.next;
      current.next = prev;
      this.head = node;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
  print() {
    if (this.isEmpty()) {
      console.log("the list is empty");
    } else {
      let currentNode = this.head;
      while (currentNode) {
        console.log(currentNode.value, " ");
        currentNode = currentNode.next;
      }
    }
  }
}

let testCase1 = new LinkedList();

// testCase1.append(10);
// testCase1.append(20);
// testCase1.append(30);
testCase1.insert(10, 0);
testCase1.insert(20, 0);
testCase1.insert(-20, 0);
testCase1.insert(60, 0);
testCase1.print();
// testCase1.removeValue(40);
console.log(testCase1.search(-20));
// testCase1.remove(0);
// testCase1.print();

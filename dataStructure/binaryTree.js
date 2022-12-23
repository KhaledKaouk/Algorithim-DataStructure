const Queue = require('./linkedListQueue')
class TNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BTree {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root === null
    }
    insert(value) {
        const newNode = new TNode(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.inserNode(this.root, newNode)
        }
    }
    inserNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.inserNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.inserNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }
    preOrder(root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
    BFS() {
        let queue = new Queue()
        queue.enqueue(this.root)
        while (!queue.isEmpty()) {
            let node = queue.peek()
            queue.dequeue()
            console.log(node.value)
            if (node.left) queue.enqueue(node.left)
            if (node.right) queue.enqueue(node.right)
        }
    }
    min() {
        let node = this.root
        if (!this.root.left) return this.root
        while (node.left) {
            node = node.left
        }
        return node.value
    }
    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }
}

const bst = new BTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root, 90))

// bst.preOrder(bst.root)
// bst.postOrder(bst.root)
// bst.BFS()
// console.log(bst.min())
// console.log(bst.max(bst.root))
bst.delete(3)
bst.BFS()
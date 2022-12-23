function BFS() {
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
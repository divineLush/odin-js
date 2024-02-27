class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class Tree {
  constructor(array = []) {
    this.root = this.buildTree(array, 0, array.length - 1)
  }

  buildTree(array, start, end) {
    if (start > end) {
      return null
    }

    const midIdx = parseInt((start + end) / 2)
    const root = new Node(array[midIdx])

    root.left = this.buildTree(array, start, midIdx - 1)
    root.right = this.buildTree(array, midIdx + 1, end)

    return root
  }

  insert(value) {
    const node = new Node(value)

    let prev = this.root
    let curr = this.root

    while(curr) {
      prev = curr
      curr = value < curr.data ? curr.left : curr.right
    }

    curr = node

    if (prev.data < curr.data) {
      prev.right = curr
    } else {
      prev.left = curr
    }
  }

  min(node) {
    let curr = node

    while (current && current.left) {
      curr = curr.left
    }

    return current
  }

  deleteItem(value, root = this.root) {
    if (!root) {
      return null
    }

    if (value < root.data) {
      root.left = this.deleteItem(value, root.left)

      return root
    }

    if (value > root.data) {
      root.right = this.deleteItem(value, root.right)

      return root
    }

    if (!root.left && !root.right) {
      return null
    }

    if (!root.right) {
      return root.left
    }

    if (!root.left) {
      return root.right
    }

    const min = this.min(root.right)
    root.data = min.data
    root.right = this.delete(temp.data, root.right)

    return root
  }

  find(value) {
    let curr = this.root
    let res = null

    while (curr) {
      if (value < curr.data) {
        curr = curr.left
        continue
      }

      if (value > curr.data) {
        curr = curr.right
        continue
      }

      res = curr
      break
    }

    return res
  }

  inOrder(callback, array = [], root = this.root) {
    if (!root) {
      return null
    }

    this.inOrder(callback, array, root.left)
    array.push(root.data)

    callback(root.data)

    this.inOrder(callback, array, root.right)

    return array
  }

  preOrder(callback, array = [], root = this.root) {
    if (!root) {
      return null
    }

    array.push(root.data)
    callback(root.data)

    this.preOrder(callback, array, root.left)
    this.preOrder(callback, array, root.right)

    return array
  }

  postOrder(callback, array = [], root = this.root) {
    if (!root) {
      return null
    }

    this.postOrder(callback, array, root.left)
    this.postOrder(callback, array, root.right)

    array.push(root.data)
    callback(root.data)

    return array
  }

  height(root = this.root) {
    if (!root) {
      return null
    }

    const left = this.height(root.left)
    const right = this.height(root.right)

    return Math.max(left, right) + 1;
  }

  depth(root = this.root) {
    let dist = 0;
    let curr = this.root;

    while (curr) {
      if (root.data < curr.data) {
        curr = curr.left
        dist++

        continue
      }

      if (root.data > curr.data) {
        current = curr.right
        dist++

        continue
      }

      break
    }

    return dist
  }

  isBalanced(root = this.root) {
    if (!root) {
      return true
    }

    const diff = Math.abs(this.height(root.left) - this.height(root.right))
    const left = this.isBalanced(root.left)
    const right = this.isBalanced(root.right)

    return diff <= 1 && left && right
  }

  reBalance() {
    const array = this.postOrder()
    this.root = this.buildTree(array, 0, array.length - 1)
  }
}

const randomArray = (length) => Array.apply(null, Array(length))
  .map(() => Math.floor(Math.random() * 1000))

const tree = new Tree(randomArray(20))
console.log(tree)
tree.insert(100)
tree.deleteItem(100)
console.log(tree.find(tree.root))
tree.inOrder(console.log)
console.log()
tree.preOrder(console.log)
console.log()
tree.postOrder(console.log)
console.log()
console.log(tree.isBalanced())

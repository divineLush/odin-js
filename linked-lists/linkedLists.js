class Node {
  constructor(value = null) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    const node = new Node(value)

    if (this.head) {
      let tmpNode = this.head
      while (tmpNode.next) {
        tmpNode = tmpNode.next
      }
      tmpNode.next = node
    } else {
      this.head = node
    }

    return this.head
  }

  prepend(value) {
    const node = new Node(value);

    if (this.head) {
      const head = this.head
      this.head = node
      this.head.next = head
    } else {
      this.head = node
    }

    return this.head
  }

  size() {
    let size = 0
    let head = this.head

    while (head) {
      head = head.next
      size++
    }

    return size
  }

  getHead() {
    return this.head
  }

  getTail() {
    let head = this.head

    if (!head) {
      return head
    }

    while (head.next) {
      head = head.next
    }

    return head
  }

  at(idx) {
    let head = this.head

    while (idx > 0) {
      head = head.next
      idx--
    }

    return (!head || idx < 0) ? null : head
  }

  pop() {
    if (!this.size()) {
      return null
    }

    if (this.size() === 1) {
      const head = this.head
      this.head = null

      return head
    }

    if (this.size() > 1) {
      let head = this.head

      while (head.next.next) {
        head = head.next
      }

      const res = head.next
      head.next = null

      return res
    }
  }

  contains(value) {
    let head = this.head
    let res = false

    while (head) {
      if (head.value === value) {
        res = true
        break
      }

      head = head.next
    }

    return res
  }

  find(value) {
    let head = this.head
    let res = null

    while (head) {
      if (head.value === value) {
        res = head
        break
      }

      head = head.next
    }

    return res
  }

  toString() {
    let res = ''
    let head = this.head

    while (head) {
      res += `(${head.value}) -> `
      head = head.next
    }

    return `${res}null`
  }
}

const list = new LinkedList()
console.log(list)
console.log(list.append(1))
console.log(list.prepend(2))
console.log(list.append(3))
console.log(list.prepend(4))
console.log(list.size())
console.log(list.getHead())
console.log(list.getTail())
console.log(list.at(2))
console.log(list.pop())
console.log(list.contains(2))
console.log(list.contains(10))
console.log(list.find(2))
console.log(list.find(10))
console.log(list.toString())

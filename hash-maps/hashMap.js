class HashMap {
  buckets = new Array(16)
  count = 0
  loadFactor = 0.75

  hash(value) {
    let hashCode = 0

    const primeNumber = 31
    for (let i = 0; i < value.length; i++) {
      hashCode = primeNumber * hashCode + value.charCodeAt(i)
    }

    return hashCode
  }

  set(key, value) {
    const index = this.hash(key) % this.buckets.length

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound")
    }

    if (!this.buckets[index]) {
      this.buckets[index] = []
    }

    this.buckets[index].push({ key, value })
    this.count++

    if (this.count / this.buckets.length <= this.loadFactor) {
      return
    }

    const size = buckets.length * 2
    const buckets = new Array(size)

    this.buckets.forEach((bucket) =>
      bucket.forEach(({ key, value }) => {
        const newIndex = this.hash(key) % size

        if (newIndex < 0 || newIndex >= buckets.length) {
          throw new Error("Trying to access index out of bound")
        }

        if (!buckets[newIndex]) {
          buckets[newIndex] = []
        }

        buckets[newIndex].push({ key, value })
      })
    )

    this.buckets = buckets
  }

  get(key) {
    const index = this.hash(key) % this.buckets.length

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound")
    }

    if (!this.buckets[index]) {
      return null
    }

    return this.buckets[index].find((node) => node.key === key)?.value || null
  }

  has(key) {
    const index = this.hash(key) % this.buckets.length

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound")
    }

    if (!this.buckets[index]) {
      return null
    }

    return !!this.buckets[index].find((node) => node.key === key)
  }

  remove(key) {
    const index = this.hash(key) % this.buckets.length

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound")
    }

    if (this.buckets[index]) {
      const nodeIndex = this.buckets[index].findIndex((node) => node.key === key)
      if (nodeIndex !== -1) {
        this.buckets[index].splice(nodeIndex, 1)
      }
    }

    this.count--
  }

  length() {
    return this.count
  }

  clear() {
    this.buckets = new Array(16)
    this.count = 0
  }

  keys() {
    const keysArr = []
    this.buckets.forEach((bucket) =>
      bucket.forEach((node) => {
        keysArr.push(node.key)
      })
    )

    return keysArr
  }

  values() {
    const valuesArr = []
    this.buckets.forEach((bucket) =>
      bucket.forEach((node) => {
        valuesArr.push(node.value)
      })
    )

    return valuesArr
  }

  entries() {
    const entriesArr = []
    this.buckets.forEach((bucket) =>
      bucket.forEach((node) => {
        entriesArr.push([node.key, node.value])
      })
    )

    return entriesArr
  }
}

const hashMap = new HashMap()

console.log(hashMap.length())
hashMap.set('name', 'Carlos')
console.log(hashMap.length())
console.log(hashMap.get('name'))

hashMap.set('age', 99)
console.log(hashMap.length())

hashMap.set('age', 13)
console.log(hashMap.get('age'))
console.log(hashMap.has('age'))
hashMap.remove('age')
console.log(hashMap.length())

console.log(hashMap.keys())
console.log(hashMap.values())
console.log(hashMap.entries())

hashMap.clear()
console.log(hashMap.length())

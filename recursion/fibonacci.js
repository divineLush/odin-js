const fibs = (num) => {
  if (num === 0) {
    return [0]
  }

  if (num === 1) {
    return [0, 1]
  }

  const res = [0, 1]
  for (let i = 2; i <= num; i++) {
    res.push(res[i-1] + res[i-2])
  }

  return res
}

console.log(fibs(19))

const fibsRec = (num) => {
  if (num === 0) {
    return 0
  }

  if (num === 1) {
    return 1
  }

  return fibsRec(num-1) + fibsRec(num-2)
}

console.log(fibsRec(19))

const fibsRecTail = (num, res = []) => {
  if (num === 0) {
    return [0, ...res]
  }

  if (num === 1) {
    return [0, 1, ...res]
  }

  return fibsRecTail(num-1, [fibsRec(num), ...res])
}

console.log(fibsRecTail(19))

const fibsRecTailReverse = (num, res = []) => {
  if (num === 0) {
    return [...res, 0]
  }

  if (num === 1) {
    return [...res, 1, 0]
  }

  return fibsRecTailReverse(num-1, [...res, fibsRec(num)])
}

console.log(fibsRecTailReverse(19))

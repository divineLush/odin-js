const merge = (arr, l, m, r) => {
    const headIdx = m - l + 1
    const tailIdx = r - m

    const head = []
    const tail = []

    for (var i = 0; i < headIdx; i++)
        head.push(arr[l + i])

    for (var j = 0; j < tailIdx; j++)
        head.push(tail[j] = arr[m + 1 + j])

    var i = 0
    var j = 0
    var k = l

    while (i < headIdx && j < tailIdx) {
        if (head[i] <= tail[j]) {
            arr[k] = head[i]
            i++
        }
        else {
            arr[k] = tail[j]
            j++
        }
        k++
    }

    while (i < headIdx) {
        arr[k] = head[i]
        i++
        k++
    }

    while (j < tailIdx) {
        arr[k] = tail[j]
        j++
        k++
    }
}

const mergeSort = (arr,l, r) => {
    if (l >= r) {
        return
    }

    const m = l + parseInt((r - l) / 2)
    mergeSort(arr, l, m)
    mergeSort(arr, m + 1, r)
    merge(arr, l, m, r)
}


const arr = [3, 2, 1, 13, 8, 5, 0, 1]

console.log(arr)
mergeSort(arr, 0, arr.length - 1)
console.log(arr)

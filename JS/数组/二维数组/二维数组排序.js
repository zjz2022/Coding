var arr = [
  [0, 0],
  [3, 1],
  [2, 2],
  [0, 3],
  [1, 2],
  [1, 5],
  [1, 3],
]

// 先按行排序，如果行相同，再按列排序。
arr.sort(function (a, b) {
  if (a[0] !== b[0]) {
    return a[0] - b[0]
  } else {
    return a[1] - b[1]
  }
})

console.log(arr)

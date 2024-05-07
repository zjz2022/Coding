function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}

console.log(linearSearch([2, 4, 5, 7, 8, 9], 9)) // 输出：5
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)) // 输出：0
console.log(linearSearch([1, 3, 5, 7, 9, 11], 6)) // 输出：-1
console.log(linearSearch([1, 2, 3, 5, 6, 7, 8, 10], 5)) // 输出：3
console.log(linearSearch([1, 2, 3], 4)) // 输出：-1
console.log(linearSearch([1, 100, 1000, 10000], 10000)) // 输出：3
console.log(linearSearch([], 1)) // 输出：-1

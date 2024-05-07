function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1
  // <=很重要，因为我是left=mid+1
  while (left <= right) {
    // Math.floor强制取整
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}
console.log(binarySearch([2, 4, 5, 7, 8, 9], 9)) // 输出：5
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)) // 输出：0
console.log(binarySearch([1, 3, 5, 7, 9, 11], 6)) // 输出：-1
console.log(binarySearch([1, 2, 3, 5, 6, 7, 8, 10], 5)) // 输出：3
console.log(binarySearch([1, 2, 3], 4)) // 输出：-1
console.log(binarySearch([1, 100, 1000, 10000], 10000)) // 输出：3
console.log(binarySearch([], 1)) // 输出：-1

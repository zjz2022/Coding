const quickSort = (arr, l, r) => {
  if (l >= r) return
  let x = arr[l],
    i = l - 1,
    j = r + 1
  while (i < j) {
    do {
      i++
    } while (arr[i] < x)
    do {
      j--
    } while (arr[j] > x)
    if (i < j) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  quickSort(arr, l, j)
  quickSort(arr, j + 1, r)
}

let nums = [2, 6, 7, 8, 4, 7, 8, 3]
quickSort(nums, 0, nums.length - 1)
console.log(nums)

/*
时间复杂度
*/

/**
 * 给定一个整数数组，找出其中所有两个数的组合，使这两个数相加等于0。数组中每个元素(下标)不可被重复使用。测试用例：
[-1, 0, 1, -2, 1, 2, -2, 2] => [[-1, 1], [-2, 2], [-2, 2]]
 */
const twoSum = (arr) => {
  let res = []
  arr.sort((a, b) => a - b)
  let i = 0,
    j = arr.length - 1
  while (i < j) {
    if (arr[i] + arr[j] === 0) {
      res.push([arr[i], arr[j]])
      i++
      j--
    } else if (arr[i] + arr[j] < 0) {
      i++
    } else {
      j--
    }
  }
  return res
}

let nums = [-1, 0, 1, -2, 1, 2, -2, 2]
console.log(twoSum(nums))

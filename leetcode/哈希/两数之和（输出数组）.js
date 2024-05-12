/**
 * 给定一个整数数组，找出其中所有两个数的组合，使这两个数相加等于0。数组中每个元素(下标)不可被重复使用。测试用例：
[-1, 0, 1, -2, 1, 2, -2, 2] => [[-1, 1], [-2, 2], [-2, 2]]
 */
const twoSum = (arr, target) => {
  let res = []
  let map = new Map()
  for (let i = 0; i < arr.length; i++) {
    let k = target - nums[i]
    if (map.has(k)) {
      res.push([nums[i], k])
      map.delete(k)
    } else {
      map.set(nums[i], i)
    }
  }
  return res
}

let nums = [1, 1, 6, 2, 4, 3, 8, -1, 3]
console.log(twoSum(nums, 7))

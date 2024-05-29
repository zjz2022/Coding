/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 创建一个表，用来存放数组中的元素及其在数组中的下标
  let map = new Map()

  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    let k = target - nums[i] // 计算目标差值

    // 如果表中已经存在差值，则找到了符合条件的两个元素
    if (map.has(k)) {
      // map.get(k) 是第一个元素的数组下标， i 是当前元素的数组下标
      return [map.get(k), i]
    }

    // 将当前元素及其在数组中的下标存入表中
    map.set(nums[i], i)
  }

  // 如果没有找到符合条件的两个元素，返回空数组
  return []
}

console.log(twoSum([2, 3, 6, 7, 8], 10))

// @lc code=end

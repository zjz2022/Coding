/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let i = 0
  let obj = {}
  let arr = []
  while (i < nums.length) {
    if (obj[nums[i]]) {
      obj[nums[i]] = obj[nums[i]] + 1
    } else {
      obj[nums[i]] = 1
      arr.push(nums[i])
    }
    i++
  }
  arr.sort((a, b) => {
    return obj[b] - obj[a]
  })
  return arr.splice(0, k)
}
// @lc code=end

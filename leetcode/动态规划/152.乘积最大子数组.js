/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let length = nums.length
  let maxF = nums[0]
  let minF = nums[0]
  let multiply = nums[0]
  for (let i = 1; i < length; i++) {
    let max = maxF
    let min = minF
    maxF = Math.max(max * nums[i], Math.max(nums[i], min * nums[i]))
    minF = Math.min(min * nums[i], Math.min(nums[i], max * nums[i]))
    multiply = Math.max(multiply, maxF)
  }
  return multiply
}
// @lc code=end

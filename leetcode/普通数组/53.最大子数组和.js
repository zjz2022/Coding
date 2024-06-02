/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let len = nums.length
  //dp的长度与数组长度相同
  let dp = new Array(len).fill(0)
  dp[0] = nums[0]
  let result = dp[0]
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])

    result = Math.max(result, dp[i])
  }
  return result
}
// @lc code=end

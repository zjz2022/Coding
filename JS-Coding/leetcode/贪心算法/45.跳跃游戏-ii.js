/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let n = nums.length
  let step = 0
  let end = 0
  let maxPos = 0
  for (let i = 0; i < n - 1; i++) {
    if (i <= maxPos) {
      maxPos = Math.max(maxPos, i + nums[i])
      if (i == end) {
        end = maxPos
        step++
      }
    }
  }
  return step
}

// @lc code=end

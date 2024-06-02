/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let total = 0
  let left = 0,
    right = height.length - 1,
    leftMax = 0,
    rightMax = 0
  while (left <= right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    if (leftMax < rightMax) {
      total += leftMax - height[left]
      left++
    } else {
      total += rightMax - height[right]
      right--
    }
  }
  return total
}
// @lc code=end

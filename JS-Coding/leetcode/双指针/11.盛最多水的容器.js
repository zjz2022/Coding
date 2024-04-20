/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0,
    r = height.length - 1
  let ans = Math.min(height[l], height[r]) * (r - l)
  while (l < r) {
    if (height[l] < height[r]) l++
    else r--
    ans = Math.max(ans, Math.min(height[l], height[r]) * (r - l))
  }
  return ans
}
// @lc code=end

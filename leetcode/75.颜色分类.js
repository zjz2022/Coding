/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let colors = [0, 0, 0]

  for (let i = 0; i < nums.length; i++) {
    colors[nums[i]]++
  }

  nums.length = 0
  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < colors[i]; j++) {
      nums.push(i)
    }
  }
}
// @lc code=end

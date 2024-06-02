/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length
  const res = new Array(len)
  for (let i = 0; i < len; i++) {
    res[(i + k) % len] = nums[i]
  }
  for (let i = 0; i < len; i++) {
    nums[i] = res[i]
  }
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {any} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slowIndex = 0
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] !== 0) {
      ;[nums[fastIndex], nums[slowIndex]] = [nums[slowIndex], nums[fastIndex]]
      slowIndex++
    }
  }
  return nums
}
// @lc code=end

console.log(moveZeroes([0, 1, 0, 3, 12]))

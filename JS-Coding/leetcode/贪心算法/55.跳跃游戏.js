/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// count指的是到达最近的目标的次数，最后一个目标可以直接指向数组末尾，其他目标指向最近的目标
// 如果nums[i]比count大，则直接到达结尾，不需要依靠目标
var canJump = function (nums) {
  if (nums.length === 1) return true
  let count = 0
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] <= count) {
      count++
    } else count = 0
  }
  return count == 0
}
// @lc code=end

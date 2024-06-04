/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const length = nums.length

  for (let i = 0; i < length; ++i) {
    const val = Math.abs(nums[i])
    if (nums[val] < 0) {
      return val
    } else {
      nums[val] *= -1
    }
  }
}
// @lc code=end

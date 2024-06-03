/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  var last = 0,
    now = 0
  for (var i = 0; i < nums.length; i++) {
    var temp = last
    last = now
    now = Math.max(temp + nums[i], now)
  }

  return now
}
// @lc code=end

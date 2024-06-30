/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  for (var i = nums.length - 1; i > 0 && nums[i] <= nums[i - 1]; i--);
  if (i === 0) {
    reverse(0, nums.length - 1)
    return
  }
  for (var j = i + 1; j < nums.length && nums[i - 1] < nums[j]; j++);
  swap(i - 1, j - 1)
  reverse(i, nums.length - 1)
  return

  function reverse(start, end) {
    while (start < end) {
      swap(start, end)
      start++
      end--
    }
  }
  function swap(i, j) {
    var tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
  }
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 两次二分搜索法，优化版
// 时间复杂度: O(logn)
// 空间复杂度: O(1)
var searchRange = function (nums, target) {
  let left = helper(nums, target - 1)
  let right = helper(nums, target) - 1
  if (
    left <= right &&
    left >= 0 &&
    right < nums.length &&
    nums[left] === target &&
    nums[right] === target
  ) {
    return [left, right]
  }
  return [-1, -1]
}
function helper(nums, target) {
  let i = 0,
    j = nums.length - 1
  // 寻找右边界right
  while (i <= j) {
    let m = Math.trunc((i + j) / 2)
    if (nums[m] <= target) {
      i = m + 1
    } else {
      j = m - 1
    }
  }
  return i
}
// @lc code=end

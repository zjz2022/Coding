/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0
  let end = nums.length - 1
  while (start <= end) {
    const mid = start + ((end - start) >> 1)
    if (nums[mid] === target) return mid

    if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return start
}
// @lc code=end

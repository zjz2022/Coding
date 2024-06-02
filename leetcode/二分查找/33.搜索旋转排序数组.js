/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length == 0) return -1

  let letf = 0
  let right = nums.length - 1
  while (letf <= right) {
    // 二分法
    let mid = parseInt((right + letf) / 2)
    if (nums[mid] == target) return mid
    else if (nums[mid] >= nums[letf]) {
      // mid 左边是顺序排列
      if (nums[mid] > target && nums[letf] <= target) right = mid - 1
      else letf = mid + 1
    } else {
      // mid 右边顺序排列
      if (nums[mid] < target && nums[right] >= target) letf = mid + 1
      else right = mid - 1
    }
  }
  return -1
}
// @lc code=end

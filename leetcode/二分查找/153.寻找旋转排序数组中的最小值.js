/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0,
    high = nums.length - 1

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2)

    if (nums[mid] > nums[high]) {
      low = mid + 1
    } else {
      // high 不需要变为 mid - 1
      high = mid
    }
  }

  return nums[low]
}
// @lc code=end

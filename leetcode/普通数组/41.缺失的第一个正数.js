/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] >= 1 &&
      nums[i] < nums.length &&
      nums[i] != nums[nums[i] - 1]
    ) {
      //while里面放置 下标i 的元素
      var tmp = nums[nums[i] - 1]
      nums[nums[i] - 1] = nums[i]
      nums[i] = tmp
    }
  }

  for (let i = 0; i < nums.length; i++) {
    //遍历判断
    if (nums[i] != i + 1) {
      return i + 1
    }
  }
  return nums.length + 1
}
// @lc code=end

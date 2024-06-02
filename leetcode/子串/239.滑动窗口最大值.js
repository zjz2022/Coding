/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const window = []
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (i - window[0] > k - 1) {
      window.shift()
    }
    let j = window.length - 1
    while (j >= 0 && nums[window[j]] <= nums[i]) {
      j--
      window.pop()
    }
    window.push(i)
    if (i >= k - 1) {
      result.push(nums[window[0]])
    }
  }
  return result
}
// @lc code=end

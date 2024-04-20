/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  let res = []
  for (let i = 0; i < nums.length; i++) {
    if (i && nums[i] == nums[i - 1]) continue
    let j = i + 1,
      k = nums.length - 1
    while (j < k) {
      let sum = nums[j] + nums[k]
      if (sum == -nums[i]) {
        res.push([nums[i], nums[j], nums[k]])
        while (j < k && nums[j] == nums[j + 1]) j++
        while (j < k && nums[k] == nums[k - 1]) k--
        j++
        k--
      } else if (sum < -nums[i]) {
        j++
      } else {
        k--
      }
    }
  }
  return res
}
// @lc code=end

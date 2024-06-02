/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let preSum = new Map()
  // preSun中存放 Key:前缀和 value:该前缀和出现的次数
  preSum.set(0, 1)

  let ans = 0,
    sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    // 若有 sum - sum1 = k 则存在
    let sum1 = sum - k
    // 如果该前缀和存在，则直接更新数值
    if (preSum.has(sum1)) {
      ans += preSum.get(sum1)
    }
    // 把前缀和 nums[0..i] 加入并记录出现次数
    preSum.set(sum, (preSum.get(sum) || 0) + 1)
  }
  return ans
}
// @lc code=end

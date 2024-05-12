/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set(nums)
  let res = 0
  for (let num of nums) {
    if (set.has(num - 1)) {
      continue
    }
    let curNum = num
    let curLen = 1
    while (set.has(curNum + 1)) {
      curNum += 1
      curLen += 1
    }
    res = Math.max(res, curLen)
  }
  return res
}
// @lc code=end

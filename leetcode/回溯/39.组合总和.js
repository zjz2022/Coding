/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (nums, target) {
  let res = []
  let dfs = (idx, path, t) => {
    if (t === 0) {
      res.push([...path])
      return
    }
    for (let i = idx; i < nums.length; i++) {
      if (t >= nums[i]) dfs(i, [...path, nums[i]], t - nums[i])
    }
  }
  dfs(0, [], target)
  return res
}
// @lc code=end

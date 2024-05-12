/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let res = []
  let m = intervals.length
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1])
  let pre = intervals[0][0]
  let post = intervals[0][1]
  for (let i = 1; i < m; i++) {
    if (intervals[i][0] <= post) {
      post = Math.max(post, intervals[i][1])
    } else {
      res.push([pre, post])
      pre = intervals[i][0]
      post = intervals[i][1]
    }
  }
  res.push([pre, post])
  return res
}
// @lc code=end

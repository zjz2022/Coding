/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let N = n + m - 2 // 总的移动次数
  let k = m - 1 // 向下的次数
  let res = 1
  // 求解C（N, k）
  for (let i = 1; i <= k; i++) res = (res * (N - k + i)) / i
  return res
}
// @lc code=end

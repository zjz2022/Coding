/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = [[1]] // 默认第一行是[1]
  for (let i = 1; i < numRows; i++) {
    res[i] = []
    res[i][0] = 1
    res[i][i] = 1
    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
    }
  }
  return res
}
// @lc code=end

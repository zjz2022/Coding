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
  let dp = new Array(m) // 先创建一维数组
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n) // 开始转换成二维数组
    dp[i][0] = 1 // 由于只能向左移动，故到达第一行任一格子就只有一种走法
  }
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1 // 由于只能向下移动，故到达第一列任一格子就只有一种走法
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j] // 其余格子到达的方法是临近他的上方格子和左边格子路径之和
    }
  }
  return dp[m - 1][n - 1]
}
// @lc code=end

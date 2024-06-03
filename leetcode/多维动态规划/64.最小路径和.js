/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length // 缓存行数量
  let n = grid[0].length // 缓存列数量

  // 创建第一列的路径和初始值
  for (let i = 1; i < m; i++) {
    // 第一列只能从上一列走过来，因此每个路径和都为上一列加上这一列
    grid[i][0] += grid[i - 1][0]
  }

  // 创建第一行的路径和初始值
  for (let i = 1; i < n; i++) {
    // 第一行只能从上一行走过来，因此每个路径和都为上一行加上这一行
    grid[0][i] += grid[0][i - 1]
  }

  // 递推每个位置的路径和
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 当前位置的最小路径和，等于上一步的最小路径，加上当前的路径值
      grid[i][j] =
        // 由于要去最小路径和，当前位置只能从上方和左方走过来，因此取前两步的最小值
        Math.min(grid[i - 1][j], grid[i][j - 1]) +
        // 加上当前的路径值
        grid[i][j]
    }
  }

  // 走到最后位置时，自然就能推出到达终点的最小路径和
  return grid[m - 1][n - 1]
}
// @lc code=end

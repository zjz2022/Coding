/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const dfs = (i, j) => {
    // 定义深度优先遍历函数
    // 越界、遇到水，则不访问了
    if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === '0') return
    grid[i][j] = '0' // 访问过的的地方，标记为0
    dfs(i + 1, j) // 右
    dfs(i, j + 1) // 下
    dfs(i - 1, j) // 左
    dfs(i, j - 1) // 上
  }
  const row = grid.length // 矩阵的行、列
  const col = grid[0].length
  let islandsNum = 0 // 岛屿数量
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        // 找到矩阵中，为1的地方，开始深度优先遍历
        dfs(i, j)
        islandsNum++
      }
    }
  }
  return islandsNum
}
// @lc code=end

const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
]
console.log(numIslands(grid))

/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 如果矩阵为空，即行或列为0，返回false
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false
  }
  // 获取最右上角的元素的行数、列数
  let row = 0
  let col = matrix[0].length - 1
  // 遍历矩阵
  while (row < matrix.length && col >= 0) {
    if (target < matrix[row][col]) {
      // 目标值<右上角的值，去掉当前列
      col--
    } else if (target > matrix[row][col]) {
      // 目标值>右上角的值，去掉当前行
      row++
    } else {
      // 目标值与右上角的值相同
      return true
    }
  }
  // 遍历结束也没有找到
  return false
}
// @lc code=end

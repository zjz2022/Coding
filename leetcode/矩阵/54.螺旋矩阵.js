/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  var m = matrix.length,
    n = matrix[0].length
  var upper_bound = 0,
    lower_bound = m - 1
  var left_bound = 0,
    right_bound = n - 1
  var res = []
  // res.length == m * n 则遍历完整个数组
  while (res.length < m * n) {
    if (upper_bound <= lower_bound) {
      // 在顶部从左向右遍历
      for (var j = left_bound; j <= right_bound; j++) {
        res.push(matrix[upper_bound][j])
      }
      // 上边界下移
      upper_bound++
    }

    if (left_bound <= right_bound) {
      // 在右侧从上向下遍历
      for (var i = upper_bound; i <= lower_bound; i++) {
        res.push(matrix[i][right_bound])
      }
      // 右边界左移
      right_bound--
    }

    if (upper_bound <= lower_bound) {
      // 在底部从右向左遍历
      for (var j = right_bound; j >= left_bound; j--) {
        res.push(matrix[lower_bound][j])
      }
      // 下边界上移
      lower_bound--
    }

    if (left_bound <= right_bound) {
      // 在左侧从下向上遍历
      for (var i = lower_bound; i >= upper_bound; i--) {
        res.push(matrix[i][left_bound])
      }
      // 左边界右移
      left_bound++
    }
  }
  return res
}
// @lc code=end

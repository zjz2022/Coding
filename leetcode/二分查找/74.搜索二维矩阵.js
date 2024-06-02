/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const colLength = matrix[0].length // 缓存一行的元素数量，用于计算真实索引
  let left = 0 // 二分查找左边界
  let right = matrix.length * colLength - 1 // 二分查找右边界

  // 当左右边界相遇时，查找结束
  while (left <= right) {
    // 计算当前查找区域的中点
    const mid = (left + right) >> 1
    // 计算当前中点在矩阵中的哪一行
    const row = Math.floor(mid / colLength)
    // 计算当前中点在矩阵中的哪一列
    const col = mid % colLength

    // 如果当前中点值等于目标，查找成功
    if (matrix[row][col] === target) {
      return true
    }

    // 如果中值大于目标，表示目标在左半边，将右边界移动到左半边继续查找
    if (matrix[row][col] > target) {
      right = mid - 1
    } else {
      // 如果中值小于目标，表示目标在右半边，将左边界移动到右半边继续查找
      left = mid + 1
    }
  }

  return false
}
// @lc code=end

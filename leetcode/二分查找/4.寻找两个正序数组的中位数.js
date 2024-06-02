/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var findMedianSortedArrays = function (arr1, arr2) {
  // 容错处理
  if (!arr1.length && !arr2.length) return null
  // 合并并排序
  const total = [...arr1, ...arr2].sort((a, b) => a - b)
  // 中位数索引
  let midIndex = (total.length - 1) / 2

  // 两位
  if (String(midIndex).includes('.')) {
    const left = parseInt(midIndex)
    const right = parseInt(midIndex) + 1
    const midNumber = (total[left] + total[right]) / 2
    return midNumber.toFixed(5)
  } else {
    // 一位
    return total[midIndex].toFixed(5)
  }
}
// @lc code=end

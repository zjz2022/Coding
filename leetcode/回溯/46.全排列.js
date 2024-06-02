/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let matrix = []
  const subfunc = (arr, temp) => {
    if (arr.length === 0) {
      matrix.push(temp)
    }
    for (let i = 0, len = arr.length; i < len; i++) {
      let newarr = arr.slice(0, i).concat(arr.slice(i + 1))
      subfunc(newarr, temp.concat(arr[i]))
    }
  }
  subfunc(nums, [])
  return matrix
}
// @lc code=end

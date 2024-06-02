/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = []
  const back = (path, left, right) => {
    if (path.length === n * 2) {
      res.push(path)
      return
    }
    if (left > 0) {
      back(path + '(', left - 1, right)
    }
    if (right > left) {
      back(path + ')', left, right - 1)
    }
  }
  back('', n, n)
  return res
}
// @lc code=end

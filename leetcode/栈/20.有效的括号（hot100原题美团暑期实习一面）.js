/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const map = {
  '(': ')',
  '[': ']',
  '{': '}',
}
var isValid = function (s) {
  let stack = []
  for (let key of s) {
    if (map[key]) {
      stack.push(map[key])
    } else {
      if (key !== stack.pop()) {
        return false
      }
    }
  }
  return stack.length === 0
}
// @lc code=end

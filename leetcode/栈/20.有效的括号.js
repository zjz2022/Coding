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
var isValid = function (s) {
  var rightSymbols = []
  for (var i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      rightSymbols.push(')')
    } else if (s[i] == '{') {
      rightSymbols.push('}')
    } else if (s[i] == '[') {
      rightSymbols.push(']')
    } else if (rightSymbols.pop() != s[i]) {
      return false
    }
  }
  return !rightSymbols.length
}
// @lc code=end

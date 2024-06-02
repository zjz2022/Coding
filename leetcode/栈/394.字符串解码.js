/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  if (s.length === 0) return ''
  let res = ''
  let count = 0
  let nums = [],
    strs = []
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (char >= '0' && char <= '9') {
      count = count * 10 + Number(char)
    } else if (char === '[') {
      nums.push(count)
      strs.push(res)
      count = 0
      res = ''
    } else if (char === ']') {
      let tmpCount = nums.pop()
      let tmpStr = res
      for (let k = 1; k < tmpCount; k++) {
        res += tmpStr
      }
      res = strs.pop() + res
    } else {
      res += char
    }
  }
  return res
}
// @lc code=end

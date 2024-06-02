/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = []
  let dfs = (cur, start) => {
    // 当前已经到达了最后一个元素
    if (start >= s.length) {
      res.push(cur.slice())
      return
    }
    for (let i = start; i < s.length; i++) {
      // 字符串切割
      let str = s.slice(start, i + 1)
      if (str && isPal(str)) {
        cur.push(str)
        dfs(cur, i + 1)
        // 回溯
        cur.pop()
      }
    }
  }
  dfs([], 0)
  return res
}
// 判断是否是回文
function isPal(str) {
  let len = Math.floor(str.length / 2)
  if (len === 0) {
    return true
  }
  let add = str.length % 2 === 0 ? 0 : 1
  let subStr = str.slice(0, len)
  for (let i = 0; i < len; i++) {
    if (subStr[len - i - 1] !== str[len + add + i]) {
      return false
    }
  }
  return true
}
// @lc code=end

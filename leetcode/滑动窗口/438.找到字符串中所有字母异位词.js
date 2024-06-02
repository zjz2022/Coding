/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let count = p.length,
    result = [],
    left = 0,
    right = 0,
    parray = Array(27)
      .join('0')
      .split('')
      .map((x) => parseInt(x)) // 26个0组成的数组
  for (let pc of p) {
    parray[pc.charCodeAt() - 97]++ // parray初始化
  }
  while (right < s.length) {
    if (parray[s[right++].charCodeAt() - 97]-- >= 1) count--
    if (count === 0) result.push(left)
    if (right - left === p.length && parray[s[left++].charCodeAt() - 97]++ >= 0)
      count++
  }
  return result
}
// @lc code=end

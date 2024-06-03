/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length
  var ans = s[0]
  let left, right, j
  for (var i = 0; i < len; i = j) {
    j = i + 1
    while (s[i] == s[j]) {
      j++
    }
    left = i - 1
    right = j
    while (left >= 0 && right < len && s[left] == s[right]) {
      left--
      right++
    }
    if (right - left - 1 > ans.length) {
      ans = s.slice(left + 1, right)
    }
  }
  return ans
}
// @lc code=end

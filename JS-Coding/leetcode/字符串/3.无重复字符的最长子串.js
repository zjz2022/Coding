/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0,
    right = 0,
    res = 0
  let window = new Map()
  while (right < s.length) {
    let c = s[right]
    right ++
    while
  }
}
// @lc code=end

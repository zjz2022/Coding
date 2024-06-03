/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  var dp = new Array(s.length + 1).fill(0)
  var maxLen = 0
  for (let i = 1; i <= s.length; i++) {
    if (s[i - 1] == ')' && s[i - dp[i - 1] - 2] == '(') {
      dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2]
      maxLen = Math.max(maxLen, dp[i])
    }
  }
  return maxLen
}
// @lc code=end

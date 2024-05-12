/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length
  let maxProfit = 0,
    maxPrice = prices[len - 1]
  for (let i = len - 2; i >= 0; i--) {
    maxProfit = Math.max(maxProfit, maxPrice - prices[i])
    maxPrice = Math.max(maxPrice, prices[i])
  }
  return maxProfit
}

// @lc code=end

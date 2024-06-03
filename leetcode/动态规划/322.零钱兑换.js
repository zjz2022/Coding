/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity) //动态规划，要求最小硬币个数，预设为无穷大
  dp[0] = 0 // 初始值
  for (let i = 1; i <= amount; i++) {
    // 为每个能被兑换的amount填入最小硬币数
    for (let j = 0; j < coins.length; j++) {
      let coin = coins[j] // 当前面额
      if (i - coin >= 0)
        // 大于面额值，才能被兑换
        dp[i] = Math.min(dp[i], dp[i - coin] + 1) // 需要比较减每个面额时，得到最小硬币个数
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount] // 无解时，值为预设值，返回-1
}
// @lc code=end

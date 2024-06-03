/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = 0
  nums.forEach((item) => {
    sum += item
  })
  if (sum % 2 === 1) {
    return false
  }
  let target = sum / 2

  //dp[j]表示背包总容量为j,最大可凑成j的子集和为dp[j]
  //1.倒序遍历背包,如果正序遍历背包,会导致同一个物品被放入多次
  //2.不可以先遍历背包再遍历物品,因为我们是一维数组的写法,背包一定是倒序遍历,如果先遍历背包,那么每
  //个dp[j]只会放入一个物品
  const dp = Array(target + 1).fill(0)
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
    }
  }
  //当总容量为target,且最大可凑成target的子集和也为target时,说明找到了答案!!
  if (dp[target] === target) {
    return true
  }
  return false
}
// @lc code=end

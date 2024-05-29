/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // 转化成哈希集合，为了快速查找哈希集合中是否存在某个元素。
  // 因为在哈希集合中查找元素的时间复杂度为O(1)，从而提高了算法的效率。
  let set = new Set(nums)

  // 初始化最长连续子序列的长度为0
  let res = 0

  // 对哈希集合中的每个元素进行迭代
  for (let num of set) {
    // 如果num-1存在于集合中，说明num不是连续子序列的第一个元素，
    // 所以我们继续下一个元素的迭代，寻找新的序列的可能起点
    if (set.has(num - 1)) continue

    // 如果num-1不存在于集合中，说明num可以作为一个新的连续子序列的起点，
    // 因此开始向下一个元素进行检索，并计算连续子序列的长度
    let curNum = num // 当前判断的数字
    let curLen = 1 // 初始化当前序列长度为1

    // 如果集合中存在curNum+1，将curNum更新为curNum+1，并将当前长度加1
    // 循环此过程，直到集合中不存在curNum+1为止
    while (set.has(curNum + 1)) {
      curNum += 1
      curLen += 1
    }
    // 比较并更新已知的最长连续子序列长度
    // Math.max是取两个参数中的最大值
    res = Math.max(res, curLen)
  }

  // 返回最长连续子序列的长度
  return res
}
// @lc code=end

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))

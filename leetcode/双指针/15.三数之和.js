/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  let ans = []
  for (let i = 0; i < nums.length; i++) {
    // i && 是为了防止在 i = 0 时去比较 nums[0] 和 nums[-1]
    if (i && nums[i] == nums[i - 1]) continue
    let j = i + 1,
      k = nums.length - 1
    while (j < k) {
      let sum = nums[j] + nums[k]
      if (sum == -nums[i]) {
        ans.push([nums[i], nums[j], nums[k]])
        // j++后，我从nums[j]移动到了nums[j+1]上，还是同一个值，没变
        while (j < k && nums[j] == nums[j + 1]) j++
        while (j < k && nums[k] == nums[k - 1]) k--
        // 所以我要改变值，就要j++
        j++
        k--
      } else if (sum < -nums[i]) {
        j++
      } else {
        k--
      }
    }
  }
  return ans
}

// @lc code=end

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

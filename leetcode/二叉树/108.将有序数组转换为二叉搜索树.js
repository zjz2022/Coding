/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // 由于数组是排序好的，因此一个思路就是将数组分成两半，一半是左子树，另一半是右子树
  // 然后运用“树的递归性质”递归完成操作即可。
  if (nums.length === 0) return null
  const mid = nums.length >> 1
  const root = new TreeNode(nums[mid])

  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1))
  return root
}
// @lc code=end

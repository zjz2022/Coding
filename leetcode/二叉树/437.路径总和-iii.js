/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, sum) {
  if (root === null) {
    return 0
  }
  // 以root为根的树中等于sum的路径树 = 左子树中的路径数 + 右子树中的路径数 + 以root为起点的路径数
  return pathSum(root.left, sum) + pathSum(root.right, sum) + dfs(root, sum)
  function dfs(root, sum) {
    if (root === null) {
      return 0
    }
    sum -= root.val
    return (sum === 0 ? 1 : 0) + dfs(root.left, sum) + dfs(root.right, sum)
  }
}
// @lc code=end

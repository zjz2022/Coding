/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */
var maxPathSum = function (root) {
  let ans = Number.MIN_SAFE_INTEGER
  var oneSideMax = function (root) {
    if (root === null) return 0
    let left = Math.max(0, oneSideMax(root.left))
    let right = Math.max(0, oneSideMax(root.right))
    ans = Math.max(ans, left + right + root.val)
    return Math.max(left, right) + root.val
  }

  oneSideMax(root)
  return ans
}
// @lc code=end

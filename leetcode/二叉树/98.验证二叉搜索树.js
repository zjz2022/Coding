/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let prev = -Infinity
  let result = true
  function inorder(root) {
    if (root === null) return
    inorder(root.left)
    if (root.val <= prev) {
      result = false
      return
    }
    prev = root.val
    inorder(root.right)
  }
  inorder(root)
  return result
}
// @lc code=end

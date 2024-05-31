/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root == null) return null
  //递归翻转左边,其实就是从最外层叶子节点开始翻转。形成左边子树。
  var left = invertTree(root.left)
  //递归翻转右边，其实就是从最外层叶子节点开始翻转。形成右边子树。
  var right = invertTree(root.right)
  //左右子树 交换
  root.left = right
  root.right = left
  return root
}
// @lc code=end

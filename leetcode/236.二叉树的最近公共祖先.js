/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === p || root === q) {
    return root
  }

  let x = lowestCommonAncestor(root.left, p, q)
  let y = lowestCommonAncestor(root.right, p, q)

  if (x && y) {
    return root
  } else {
    return x || y // 返回存在的那一个
  }
}
// @lc code=end

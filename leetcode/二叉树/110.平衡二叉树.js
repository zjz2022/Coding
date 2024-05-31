/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
  return height(root) !== -1
}

function height(root) {
  if (!root) return 0
  const left = height(root.left)
  const right = height(root.right)
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    // 不是平衡树，则“剪枝”，直接返回
    return -1
  }
  return Math.max(left, right) + 1
}
// @lc code=end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
let root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)

console.log(isBalanced(root))

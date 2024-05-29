/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
// 建立的主要函数，用于求得所有路径之和
var sumNumbers = function (root) {
  let sum = 0
  const dfs = function (root, total) {
    if (!root.left && !root.right) {
      sum = sum + (total - 0)
      return
    }
    if (root.left) {
      dfs(root.left, total + '' + root.left.val)
    }
    if (root.right) {
      dfs(root.right, total + '' + root.right.val)
    }
  }
  dfs(root, root.val)
  return sum
}

// @lc code=end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
// 创建一个测试用的 TreeNode
let root = new TreeNode(1, new TreeNode(2), new TreeNode(3))

// 测试 levelOrder 函数
console.log(sumNumbers(root)) // 期望输出： 25
